import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilter } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};

const bookReview = async (
  bookId: string,
  review: string,
): Promise<IBook | null> => {
  const isBookExist = await Book.isBookExist(bookId);

  if (!isBookExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book does not found!');
  }

  const result = await Book.findByIdAndUpdate(
    bookId,
    {
      $push: { reviews: review },
    },
    { new: true },
  );

  return result;
};

const getSingleBook = async (bookId: string): Promise<IBook | null> => {
  const result = await Book.findById(bookId);
  return result;
};

const getAllBooks = async (
  filters: IBookFilter,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IBook[]>> => {
  //search logic
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  //filter logic
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  //pagination logic
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  //conditional query
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const updateBook = async (
  bookId: string,
  user: JwtPayload | null,
  payload: Partial<IBook>,
): Promise<IBook | null> => {
  const isBookExist = await Book.isBookExist(bookId);
  if (!isBookExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book does not found!');
  }

  if (isBookExist?.authorEmail !== user?.email) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
  }

  const result = await Book.findByIdAndUpdate(bookId, payload, { new: true });
  return result;
};

const deleteBook = async (
  bookId: string,
  user: JwtPayload | null,
): Promise<IBook | null> => {
  const isBookExist = await Book.isBookExist(bookId);
  if (!isBookExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book does not found!');
  }

  if (isBookExist?.authorEmail !== user?.email) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
  }

  const result = await Book.findByIdAndDelete(bookId);
  return result;
};

export const BookService = {
  createBook,
  bookReview,
  getSingleBook,
  getAllBooks,
  updateBook,
  deleteBook,
};

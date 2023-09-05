import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import { IBook } from './book.interface';
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
  deleteBook,
};

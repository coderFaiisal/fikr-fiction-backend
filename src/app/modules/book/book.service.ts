import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = (await Book.create(payload)).populate('authorId');
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
  const result = await Book.findById(bookId).populate('authorId');
  return result;
};

export const BookService = {
  createBook,
  bookReview,
  getSingleBook,
};

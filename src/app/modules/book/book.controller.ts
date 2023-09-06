import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { paginationFields } from '../../constant/pagination';
import { bookFilterableFields } from './book.constant';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body;

  const result = await BookService.createBook(bookData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});

const bookReview = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const { review } = req.body;

  const result = await BookService.bookReview(bookId, review);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;

  const result = await BookService.getSingleBook(bookId);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getAllBooks(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const user = req.user;
  const { ...updatedData } = req.body;

  const result = await BookService.updateBook(bookId, user, updatedData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const user = req.user;

  const result = await BookService.deleteBook(bookId, user);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  bookReview,
  getSingleBook,
  getAllBooks,
  updateBook,
  deleteBook,
};

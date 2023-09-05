import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook,
);

router.post(
  '/review/:id',
  validateRequest(BookValidation.bookReviewZodSchema),
  BookController.bookReview,
);

router.get('/:id', BookController.getSingleBook);

router.get('/');

router.patch('/:id');

router.delete('/:id', auth(), BookController.deleteBook);

export const BookRoutes = router;

import express from 'express';
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
router.delete('/:id');

export const BookRoutes = router;

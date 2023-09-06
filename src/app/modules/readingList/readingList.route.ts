import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReadingListValidation } from './readingList.validation';
import { ReadingListController } from './readingList.controller';

const router = express.Router();

router.post(
  '/create-readingList',
  validateRequest(ReadingListValidation.createReadingListZodSchema),
  ReadingListController.createReadingList,
);

router.get('/', auth());
router.patch('/:id', auth());

export const ReadingListRoutes = router;

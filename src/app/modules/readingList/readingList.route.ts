import express from 'express';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/add-readingList');
router.get('/', auth());

export const ReadingListRoutes = router;

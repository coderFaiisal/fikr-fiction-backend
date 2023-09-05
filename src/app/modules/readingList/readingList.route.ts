import express from 'express';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/create-reading-list');
router.get('/', auth());

export const ReadingListRoutes = router;

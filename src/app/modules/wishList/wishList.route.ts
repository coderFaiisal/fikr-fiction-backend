import express from 'express';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('add-wishList');
router.get('/', auth());

export const WishListRoutes = router;

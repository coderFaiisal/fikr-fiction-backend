import express from 'express';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('create-wishList');
router.get('/', auth());

export const WishListRoutes = router;

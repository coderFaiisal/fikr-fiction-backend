import express from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { ReadingListRoutes } from '../modules/readingList/readingList.route';
import { UserRoutes } from '../modules/user/user.route';
import { WishListRoutes } from '../modules/wishList/wishList.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/readingList',
    route: ReadingListRoutes,
  },
  {
    path: '/wishList',
    route: WishListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

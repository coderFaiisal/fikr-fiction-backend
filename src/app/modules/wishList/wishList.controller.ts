import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishList } from './wishList.interface';
import { WishListService } from './wishList.service';

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...wishListData } = req.body;

  const result = await WishListService.createWishList(wishListData);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book successfully added into wish list',
    data: result,
  });
});

const getWishList = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;

  const result = await WishListService.getWishList(user);

  sendResponse<IWishList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wish list retrieved successfully',
    data: result,
  });
});

const deleteWishList = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const listId = req.params.id;

  const result = await WishListService.deleteWishList(user, listId);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wish list delete successfully',
    data: result,
  });
});

export const WishListController = {
  createWishList,
  getWishList,
  deleteWishList,
};

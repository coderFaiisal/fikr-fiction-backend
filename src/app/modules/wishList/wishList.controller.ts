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

export const WishListController = {
  createWishList,
};

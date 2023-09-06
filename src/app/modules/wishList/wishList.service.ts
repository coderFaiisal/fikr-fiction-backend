import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const isExist = await WishList.findOne(payload);

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Already added');
  }

  const result = (await WishList.create(payload)).populate('bookId');
  return result;
};

const getWishList = async (user: JwtPayload | null): Promise<IWishList[]> => {
  const result = await WishList.find({ userEmail: user?.email });
  return result;
};

export const WishListService = {
  createWishList,
  getWishList,
};

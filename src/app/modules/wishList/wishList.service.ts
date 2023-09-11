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

const deleteWishList = async (
  user: JwtPayload | null,
  listId: string,
): Promise<IWishList | null> => {
  //check list
  const isListExist = await WishList.findById(listId);

  if (!isListExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wish item does not found!');
  }

  //check authentic user
  if (isListExist?.userEmail !== user?.email) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  const result = await WishList.findByIdAndDelete(listId);

  return result;
};

export const WishListService = {
  createWishList,
  getWishList,
  deleteWishList,
};

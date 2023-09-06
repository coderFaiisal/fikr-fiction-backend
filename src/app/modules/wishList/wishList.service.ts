import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const result = await WishList.create(payload);
  return result;
};

export const WishListService = {
  createWishList,
};

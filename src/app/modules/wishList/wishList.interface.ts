import { Types } from 'mongoose';

export type IWishList = {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
};

import { Types } from 'mongoose';

export type IWishList = {
  userEmail: string;
  bookId: Types.ObjectId;
};

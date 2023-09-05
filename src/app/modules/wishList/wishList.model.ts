import { model, Schema } from 'mongoose';
import { IWishList } from './wishList.interface';

const wishListSchema = new Schema<IWishList>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
});

export const WishList = model<IWishList>('WishList', wishListSchema);

import { Types } from 'mongoose';

export type IReadingList = {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
  status: 'reading' | 'read soon' | 'finished';
};

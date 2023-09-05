import { Schema, model } from 'mongoose';
import { IReadingList } from './readingList.interface';

const readingListSchema = new Schema<IReadingList>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  status: {
    type: String,
    enum: ['reading', 'read soon', 'finished'],
    required: true,
  },
});

export const ReadingList = model<IReadingList>(
  'ReadingList',
  readingListSchema,
);

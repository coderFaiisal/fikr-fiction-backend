import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook, BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    reviews: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

bookSchema.statics.isBookExist = async function (
  bookId: string,
): Promise<IBook | null> {
  return await Book.findById(bookId).populate('authorId').lean();
};

export const Book = model<IBook, BookModel>('Book', bookSchema);

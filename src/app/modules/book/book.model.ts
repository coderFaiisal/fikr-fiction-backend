import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook, BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    authorEmail: { type: String, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: String, required: true },
    ratings: { type: String, required: true },
    photoURL: { type: String },
    reviews: [
      {
        userName: { type: String },
        review: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  },
);

bookSchema.statics.isBookExist = async function (
  bookId: string,
): Promise<IBook | null> {
  return await Book.findById(bookId).lean();
};

export const Book = model<IBook, BookModel>('Book', bookSchema);

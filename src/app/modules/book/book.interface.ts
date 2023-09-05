/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  authorId: Types.ObjectId;
  reviews?: string[];
};

export type BookModel = {
  isBookExist(bookId: string): Promise<IBook | null>;
} & Model<IBook>;

/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
};

export type BookModel = {
  isBookExist(bookId: string): Promise<IBook | null>;
} & Model<IBook>;

/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationYear: string;
  reviews?: string[];
};

export type BookModel = {
  isBookExist(bookId: string): Promise<IBook | null>;
} & Model<IBook>;

export type IBookFilter = {
  searchTerm?: string;
  genre?: string;
  publicationYear?: string;
};

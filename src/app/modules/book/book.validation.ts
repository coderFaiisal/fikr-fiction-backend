import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    authorEmail: z.string({
      required_error: 'Author email is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationYear: z.string({
      required_error: 'Publication year is required',
    }),
    ratings: z.string({
      required_error: 'Rating is required',
    }),
    photoURL: z.string().optional(),
  }),
});

const bookReviewZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'User name is required',
    }),
    review: z.string({
      required_error: 'Review is required',
    }),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    authorEmail: z.string().optional(),
    genre: z.string().optional(),
    publicationYear: z.string().optional(),
    ratings: z.string().optional(),
    photoURL: z.string().optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  bookReviewZodSchema,
  updateBookZodSchema,
};

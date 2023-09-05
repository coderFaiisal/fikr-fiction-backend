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
    publicationDate: z.string({
      required_error: 'Publication date is required',
    }),
  }),
});

const bookReviewZodSchema = z.object({
  body: z.object({
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
    publicationDate: z.string().optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  bookReviewZodSchema,
  updateBookZodSchema,
};

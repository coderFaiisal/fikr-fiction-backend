import { z } from 'zod';

const createWishListZodSchema = z.object({
  body: z.object({
    userEmail: z.string({
      required_error: 'User email is required',
    }),
    bookId: z.string({
      required_error: 'Book is required',
    }),
  }),
});

export const WishListValidation = {
  createWishListZodSchema,
};

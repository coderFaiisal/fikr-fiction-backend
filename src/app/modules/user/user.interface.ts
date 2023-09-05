/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  email: string;
  password: string;
};

export type UserModel = {
  isUserExist(email: string): Promise<IUser | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;

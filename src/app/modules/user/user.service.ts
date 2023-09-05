import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const isUserExist = await User.isUserExist(payload.email);

  if (isUserExist) {
    throw new ApiError(httpStatus.CONFLICT, 'User already exist!');
  }

  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};

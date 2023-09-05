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

const loginUser = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  //check user
  const isUserExist = await User.isUserExist(email!);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not found!');
  }

  //check password
  const isPasswordMatched = await User.isPasswordMatched(
    password!,
    isUserExist.password,
  );

  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect password!');
  }
};

export const UserService = {
  createUser,
  loginUser,
};

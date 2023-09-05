import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelper } from '../../../helpers/jwtHelper';
import { ILoginResponse, ILoginUser, IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const isUserExist = await User.isUserExist(payload.email);

  if (isUserExist) {
    throw new ApiError(httpStatus.CONFLICT, 'User already exist!');
  }

  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginResponse> => {
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

  //create token
  const accessToken = jwtHelper.createToken(
    {
      email,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelper.createToken(
    {
      email,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserService = {
  createUser,
  loginUser,
};

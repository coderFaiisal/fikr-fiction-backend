import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IReadingList } from './readingList.interface';
import { ReadingList } from './readingList.model';

const createReadingList = async (
  payload: IReadingList,
): Promise<IReadingList> => {
  const { userEmail, bookId } = payload;

  const isExist = await ReadingList.find({
    userEmail: userEmail,
    bookId: bookId,
  });

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Already added');
  }

  const result = await ReadingList.create(payload);
  return result;
};

export const ReadingListService = {
  createReadingList,
};

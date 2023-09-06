import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IReadingList } from './readingList.interface';
import { ReadingList } from './readingList.model';

const createReadingList = async (
  payload: IReadingList,
): Promise<IReadingList> => {
  const { userEmail, bookId } = payload;

  const isExist = await ReadingList.findOne({ userEmail, bookId });

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Already added');
  }

  payload.status = 'read soon';

  const result = (await ReadingList.create(payload)).populate('bookId');
  return result;
};

export const ReadingListService = {
  createReadingList,
};

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReadingListService } from './readingList.service';

const createReadingList = catchAsync(async (req: Request, res: Response) => {
  const { ...readingListData } = req.body;

  const result = await ReadingListService.createReadingList(readingListData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book successfully added into reading list',
    data: result,
  });
});

export const ReadingListController = {
  createReadingList,
};

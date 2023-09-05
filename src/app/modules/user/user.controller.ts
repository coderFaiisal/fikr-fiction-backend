import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  res.send('working');
};

export const UserController = {
  createUser,
};

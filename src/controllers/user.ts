import { Request, Response } from 'express';

import { PARAM_MISS } from '@consts/errors';
import User from '@models/user';


async function createUser(req: Request, res: Response) {
  const { account, password } = req.body;
  if (!account || !password) {
    return res.json({ retCode: PARAM_MISS });
  }
  const { retCode, message } = await User.create({ account, password });
  return res.json({ retCode, message });
}

function deleteUser(req: Request, res: Response) {
  res.send(req.body);
}

function updateUser(req: Request, res: Response) {
  res.send(req.body);
}

function queryUser(req: Request, res: Response) {
  console.log(req.body, req.params);
  res.send(req.body);
}

export default {
  createUser,
  deleteUser,
  updateUser,
  queryUser,
};

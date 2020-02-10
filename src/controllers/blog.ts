import { Request, Response } from 'express';

function createBlog(req: Request, res: Response) {
  res.send(req.body);
}

function deleteBlog(req: Request, res: Response) {
  res.send(req.body);
}

function updateBlog(req: Request, res: Response) {
  res.send(req.body);
}

function queryBlog(req: Request, res: Response) {
  res.send(req.body);
}

export default {
  createBlog,
  deleteBlog,
  updateBlog,
  queryBlog,
};

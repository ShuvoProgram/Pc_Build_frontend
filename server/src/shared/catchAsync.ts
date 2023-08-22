import { NextFunction, Request, RequestHandler, Response } from 'express';

export const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };

import { Response } from 'express';

type IApiRepose<T> = {
  statusCode: number;
  success: true;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};
const sendReponse = <T>(res: Response, data: IApiRepose<T>): void => {
  const responseData: IApiRepose<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta || null || undefined,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendReponse;

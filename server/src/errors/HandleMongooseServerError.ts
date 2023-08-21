import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interface/common';
import { IGenericErrorMessage } from '../interface/error';

const HandleMongoServerError = (
  error: mongoose.Error.MongooseServerSelectionError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: '',
      message: error.message,
    },
  ];

  const statusCode = 500;
  return {
    statusCode,
    message: 'Data Already Exists',
    errorMessages: errors,
  };
};

export default HandleMongoServerError;

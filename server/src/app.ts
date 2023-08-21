import { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
import { UserRouter } from './app/routes';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './middleware/globalErrorHandle';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', UserRouter);

//global error handler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PC BUILDER !!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const resStatus = {
    success: false,
    message: 'Something Went Wrong !!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api is not found !',
      },
    ],
  };
  res.status(200).json(resStatus);
  next();
});
export default app;

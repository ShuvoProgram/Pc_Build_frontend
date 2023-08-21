import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendReponse';
import { ProductService } from './product.service';
import { IProducts, IReview } from './product.interface';
import httpStatus from 'http-status';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productInfo } = req.body;
  const result = await ProductService.createProduct(productInfo);
  sendReponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Added Product !!',
    success: true,
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.deleteByIdProduct(id);
  sendReponse(res, {
    statusCode: 200,
    message: 'Successfully deleted Product!!',
    success: true,
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getByIdProduct(id);
  sendReponse(res, {
    statusCode: 200,
    message: 'Successfully retrieve Product information !!',
    success: true,
    data: result,
  });
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();
  sendReponse(res, {
    statusCode: 200,
    message: 'Successfully retrieve all Product information !!',
    success: true,
    data: result,
  });
});

const getProductByCategory = catchAsync(async (req: Request, res: Response) => {
  const category = req.query.category as string;
  const result = await ProductService.getProductByCategories(category);
  sendReponse(res, {
    statusCode: 200,
    message: 'Successfully retrieve Product information !!',
    success: true,
    data: result,
  });
});

// Controller function to add a review to a product
export const addReview = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const review: IReview = {
    name: req.body.name,
    rating: req.body.rating,
    review: req.body.review,
  };

  try {
    const updatedProduct = await ProductService.addReviewToProduct(
      productId,
      review
    );
    if (updatedProduct) {
      return res.status(200).json(updatedProduct);
    } else {
      return res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error adding review:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const ProductController = {
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  createProduct,
  getProductByCategory,
  addReview,
};

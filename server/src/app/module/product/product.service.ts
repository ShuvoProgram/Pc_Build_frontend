import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IProducts, IReview } from './product.interface';
import { ProductModel } from './product.model';

const createProduct = async (payload: IProducts): Promise<IProducts | null> => {
  // Check if a product with the same name already exists
  const existingProduct = await ProductModel.findOne({ title: payload.title });
  if (existingProduct) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Product with the same title already exists.'
    );
  }
  try {
    const result = await ProductModel.create(payload);
    return result;
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Error creating product.');
  }
};

const getAllProducts = async (): Promise<IProducts[] | null> => {
  const result = await ProductModel.find({});
  return result;
};

const deleteByIdProduct = async (id: string): Promise<IProducts | null> => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};

const getByIdProduct = async (payload: string): Promise<IProducts | null> => {
  const result = await ProductModel.findOne({ _id: payload });
  return result;
};

const getProductByCategories = async (
  payload: string | null
): Promise<IProducts[] | null> => {
  const result = await ProductModel.find({ category: payload });
  return result;
};
const addReviewToProduct = async (
  productId: string,
  review: IReview
): Promise<IProducts | null> => {
  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    product.reviews.push(review);
    await product.save();
    return product;
  } catch (error) {
    console.error('Error adding review:', error);
    return null;
  }
};
export const ProductService = {
  getByIdProduct,
  deleteByIdProduct,
  getAllProducts,
  createProduct,
  getProductByCategories,
  addReviewToProduct,
};

import { Model } from 'mongoose';

export interface IReview {
  name: string;
  rating?: string;
  review: string;
}

export interface IProducts {
  title: string;
  description: string;
  keyFeatures: Map<string, string>;
  category: string;
  price?: string;
  status?: 'In Stock' | 'Out of stock';
  rating?: string;
  image?: string;
  reviews: IReview[];
}

export type IProductModel = Model<IProducts, Record<string, unknown>>;

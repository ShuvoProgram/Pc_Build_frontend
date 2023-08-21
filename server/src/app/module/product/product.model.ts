import { Schema, model } from 'mongoose';
import { IProductModel, IProducts } from './product.interface';

const ProductSchema = new Schema<IProducts, IProductModel>(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    keyFeatures: [
      {
        value: String,
        key: String,
      },
    ],
    category: {
      type: String,
    },
    price: {
      type: String,
    },
    status: {
      type: String,
      enum: ['In Stock', 'Out of stock'],
    },
    image: {
      type: String,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: String,
          // required: true,
          default: 0,
        },
        review: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const ProductModel = model<IProducts, IProductModel>(
  'products',
  ProductSchema
);

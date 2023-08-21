import express from 'express';
import { ProductRouter } from '../module/product/product.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRouter
    },
]
moduleRoutes.forEach((field) => router.use(field.path, field.route));

export const UserRouter = router;
import { ProductController } from './product.controller';
import express from 'express';

const router = express.Router();

router.get('/cat', ProductController.getProductByCategory);
router.get('/', ProductController.getAllProduct);
router.post('/create', ProductController.createProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/:id', ProductController.getSingleProduct);
router.post('/:productId/add-review', ProductController.addReview);

export const ProductRouter = router;

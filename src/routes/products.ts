import express from 'express';
import productsController from '../controllers/products.controller';
import productValidation from '../middlewares/products';

const productsRouter = express.Router();

productsRouter.post(
  '/', 
  productValidation.nameValidation,
  productValidation.priceValidation, 
  productsController.create,
);
productsRouter.get('/', productsController.findAll);

export default productsRouter;
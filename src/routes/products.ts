import express from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', productsController.create);

export default productsRouter;
import { Request, Response } from 'express';
import productsService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const product = await productsService.create(req.body);

  if (product.type === 'INVALID_DATA') {
    return res.status(422).json(product.data);
  }

  return res.status(201).json(product.data);
};

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.findAll();
  return res.status(200).json(products.data);
};

export default {
  create,
  findAll,
};
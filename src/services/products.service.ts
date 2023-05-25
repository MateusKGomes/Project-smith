import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/ServiceResponse';
import ProductModel from '../database/models/product.model';

type ProductCreate = Omit<Product, 'orderId'>;

type CreatedProductResponse = ServiceResponse<ProductCreate>;

const create = async (input: Product): Promise<CreatedProductResponse> => {
  const { name, price, orderId } = input;

  if (!name || !price || !orderId) {
    return { type: 'INVALID_DATA', data: { message: 'Dados Inválidos' } };
  }

  const product = await ProductModel.create({ name, price, orderId });
  
  return {
    type: 'CREATED',
    data: {
      name,
      price,
      id: product.dataValues.id,
    },
  };
};

type FindAllProductResponse = ServiceResponse<object>;

const findAll = async (): Promise<FindAllProductResponse> => {
  const products = await ProductModel.findAll();
  return {
    type: 'OK',
    data: products,
  };
};

export default { 
  create,
  findAll,
};
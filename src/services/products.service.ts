import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/ServiceResponse';
import ProductModel from '../database/models/product.model';

type ProductCreate = Omit<Product, 'orderId'>;
type ProductParam = Omit<Product, 'id'>;

type CreatedProductResponse = ServiceResponse<ProductCreate>;

const create = async (input: ProductParam): Promise<CreatedProductResponse> => {
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

export default { 
  create,
};
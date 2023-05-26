import { ServiceResponse } from 'src/types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type FindAllProductResponse = ServiceResponse<object>;

const findAll = async (): Promise<FindAllProductResponse> => {
  const orders = await OrderModel.findAll({ include: {
    model: ProductModel,
    as: 'productIds' } });
  const productId = orders.map((el) => el.dataValues)
    .map((getId) => getId);

  const getId = productId.map((el) => el);

  console.log('orders', getId);
  
  return {
    type: 'OK',
    data: orders,
  };
};

export default {
  findAll,
};
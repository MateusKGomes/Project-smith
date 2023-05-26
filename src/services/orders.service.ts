import { ServiceResponse } from 'src/types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ReturnFindAll } from '../types/Order';
// import sequelize from '../database/models';

// type FindAllProductResponse = ServiceResponse<object>;

type FindAllProductResponse = ServiceResponse<ReturnFindAll[]>;

const findAll = async (): Promise<FindAllProductResponse> => {
  const orders = await OrderModel.findAll({ include: {
    model: ProductModel,
    as: 'productIds',
    attributes: ['id'],
  } });

  const result = orders.map((order) => {
    const getProductId = order.dataValues.productIds?.map((product) => product.id);
    return {
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: getProductId,
    };
  });

  return {
    type: 'OK',
    data: result,
  };
};

export default {
  findAll,
};
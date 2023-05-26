import { ServiceResponse } from 'src/types/ServiceResponse';
// import OrderModel from '../database/models/order.model';
// import ProductModel from '../database/models/product.model';
import sequelize from '../database/models';

type FindAllProductResponse = ServiceResponse<object>;

const findAll = async (): Promise<FindAllProductResponse> => {
  // const orders = await OrderModel.findAll({ include: {
  //   model: ProductModel,
  //   as: 'productIds',
  //   attributes: {
  //     exclude: ['name', 'price', 'orderId'],
  //   }, 
  // } });
  const [productId] = await sequelize
    .query(`SELECT o.id, user_id as userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p 
  ON o.id = p.order_id 
  GROUP BY o.id;`);
  // Código parcial, solução encontrada na mentoria das 10:15 com o Gabriel.
  return {
    type: 'OK',
    data: productId,
  };
};

export default {
  findAll,
};
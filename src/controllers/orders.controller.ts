import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.findAll();
  return res.status(200).json(orders.data);
};

export default {
  findAll,
};
import express from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoute = express.Router();

ordersRoute.get('/', ordersController.findAll);

export default ordersRoute;
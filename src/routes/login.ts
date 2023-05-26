import express from 'express';
import loginController from '../controllers/Login.controller';

const loginRoute = express.Router();

loginRoute.post('/', loginController.login);

export default loginRoute;
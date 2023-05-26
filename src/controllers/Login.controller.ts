import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  
  const response = await loginService.login(username, password);

  if (response.type === 'UNAUTHORIZED') {
    return res.status(401).json(response.data);
  }

  return res.status(200).json(response.data);
};

export default {
  login,
};
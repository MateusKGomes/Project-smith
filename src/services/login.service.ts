import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwtUtil';

type LoginServiceResponse = ServiceResponse<{ token: string }>;

const login = async (username: string, password: string)
: Promise<LoginServiceResponse> => {
  const findUser = await UserModel.findOne({ where: { username } });

  if (!findUser || !bcrypt.compareSync(password, findUser?.dataValues.password)) {
    return { type: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwtUtil
    .sign({ username: findUser?.dataValues.username, id: Number(findUser?.dataValues.id) });

  return {
    type: 'OK',
    data: {
      token,
    },
  };
};

export default { 
  login,
};

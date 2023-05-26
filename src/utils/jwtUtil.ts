import jwt from 'jsonwebtoken';

const secret = 'segredo';

type TokenPayload = {
  username: string | undefined,
  id: number,
};

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default {
  sign,
};
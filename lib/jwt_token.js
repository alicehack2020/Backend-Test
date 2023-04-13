import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (payload) => {
  let token = jwt.sign(JSON.stringify(payload), SECRET_KEY);
  return token;
}

const verifyToken = (token) => {
  let data = jwt.verify(token, SECRET_KEY);
  return data;
}

const tokenDecode = (token) => {
  let data = jwt.decode(token);
  return data;
}

export {
  generateToken,
  verifyToken,
  tokenDecode,
};

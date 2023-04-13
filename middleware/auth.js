import { verifyToken, tokenDecode } from "../lib/jwt_token.js";

const authMiddleware = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ status: 401, msg: "you are not authorized" });
  }

  token = token?.split(" ")[1];

  try {
    if (verifyToken(token)) {
      let userId = tokenDecode(token);
      req.headers.userId = userId;
      next();
    } else {
      return res.status(401).json({ msg: "you are not authorized" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ msg: "something went wrong" });
  }
};

export { authMiddleware };

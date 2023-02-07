import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.js";
dotenv.config();

const checkAuth = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  } else {
    const tokenbody = token.split(` `)[1];
    try {
      const { _id } = jwt.verify(tokenbody, process.env.SECRET_KEY);
      req.user = await User.findOne({ _id }).select("_id");
      next();
    } catch (err) {
      return res.status(401).json({ err });
    }
  }
};

export { checkAuth };

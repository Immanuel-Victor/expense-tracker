import { User } from "../models/user.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
dotenv.config();

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}

const loginUser = async (req, res) => {
  const {email,senha} = req.body;

  try {
      const user = await User.login(email, senha);

      const token = createToken(user._id)

      res.status(200).json({email, token });
  } catch (error) {
      res.status(400).json({error: error.message});
  }
};

const signUpUser = async (req, res) => {
  const {nome, email, senha} = req.body;

  try{
    const user = await User.signup(nome,email,senha);

    const token = createToken(user._id)
    res.status(200).json({nome,email,token});
  }catch(error){
    res.status(400).json({error: error.message})
  }
};

export { loginUser, signUpUser };

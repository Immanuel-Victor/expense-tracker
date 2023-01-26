import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    salario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

userSchema.statics.signup = async function(nome,salario,email,senha) {

  if(!email || !senha || !salario || !nome ){
    throw Error('All fields must be filled')
  }

  if(!validator.isEmail(email)){
    throw Error('Not a valid email')
  }

  if(!validator.isStrongPassword(senha)){
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({email})

  if(exists){
    throw Error('E-mail already in use')
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(senha,salt)

  const user = await this.create({nome,salario,email,senha:hash})

  return user
}

userSchema.statics.login = async function(email,senha){
  if(!email || !senha){
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({email});

  if(!user){
    throw Error('User not registered in the app')
  };

  const match = await bcrypt.compare(senha, user.senha);
  
  if(!match){
    throw Error('Incorrect Password')
  };

  return user

}

const User = mongoose.model("User", userSchema);
export { User };

import mongoose from "mongoose";
import { Schema } from "mongoose";

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
    Dia_de_pagamento: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export { User };

import mongoose from "mongoose";
import { Schema } from "mongoose";

const investimentSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    rendimento: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Investiment = mongoose.model("investiment", investimentSchema);
export { Investiment };

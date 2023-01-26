import mongoose from "mongoose";
import express from "express";
import { expenseRouter } from "./routes/expenses.js";
import { investimentRouter } from "./routes/investiments.js";
import { userRouter } from "./routes/user.js";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`aplicação iniciada em http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.use("/api/gastos", expenseRouter);
app.use("/api/investimentos", investimentRouter)
app.use("/api/user", userRouter)

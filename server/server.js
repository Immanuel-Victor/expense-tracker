import mongoose from "mongoose";
import express, { response } from "express";
import { config } from "dotenv";
import { expenseRouter } from "./routes/expenses.js";

const app = express();
const environment = config();

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

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.use("/api/gastos", expenseRouter);

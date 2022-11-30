import express, { response } from "express";
import { config } from "dotenv";

const app = express();
const environment = config();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.listen(process.env.PORT, () => {
  console.log(`aplicação iniciada em http://localhost:${process.env.PORT}`);
});

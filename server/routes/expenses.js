import express from "express";
import { createExpense } from "../controllers/expenseController.js";
import { Expense } from "../models/expense.js";

const expenseRouter = express.Router();

// Get Routes

expenseRouter.get("/meus-gastos", (req, res) => {
  res.json({ msg: "Olá" });
});

expenseRouter.get("/meus-gastos/:id", (req, res) => {
  res.json({ msg: "Gasto 1" });
});

// Post Routes

expenseRouter.post("/meus-gastos", createExpense);

// Delete Routes

expenseRouter.delete("/meus-gastos/:id", (req, res) => {
  res.json({ msg: "Gasto removido" });
});

// Patch Routes

expenseRouter.patch("/meus-gastos/:id", (req, res) => {
  res.json({ msg: "Gasto Atualizado" });
});

export { expenseRouter };

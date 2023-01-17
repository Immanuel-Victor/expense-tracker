import express from "express";
import { createExpense, getAll, getOne, removeExpense, updateExpense } from "../controllers/expenseController.js";

const expenseRouter = express.Router();

// Get Routes

expenseRouter.get("/meus-gastos", getAll);
expenseRouter.get("/meus-gastos/:id", getOne);

// Post Routes

expenseRouter.post("/meus-gastos", createExpense);

// Delete Routes

expenseRouter.delete("/meus-gastos/:id", removeExpense);

// Patch Routes

expenseRouter.patch("/meus-gastos/:id", updateExpense);

export { expenseRouter };

import { Expense } from "../models/expense.js";
import mongoose from "mongoose";

//GET

const getAll = async (req, res) => {
  const expenses = await Expense.find().sort({ createdAt: -1 });
  res.status(200).json(expenses);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }
  const expense = await Expense.findById(id);

  res.status(200).json(expense);
};

//CREATE
const createExpense = async (req, res) => {
  const { titulo, descricao, valor } = req.body;

  try {
    const gasto = await Expense.create({ titulo, descricao, valor });
    res.status(200).json(gasto);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

//UPDATE

const updateExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }

  const updatedExpense = await Expense.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!updateExpense) {
    return res.status(400).json({ error: "Not Found" });
  }

  res.status(200).json({ updatedExpense });
};

//DELETE

const removeExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }

  const expense = await Expense.findOneAndDelete({ _id: id });
  if (!expense) {
    return res.status(400).json({ error: "Not Found" });
  }
  res.status(200).json(expense);
};

export { createExpense, updateExpense, removeExpense, getAll, getOne };

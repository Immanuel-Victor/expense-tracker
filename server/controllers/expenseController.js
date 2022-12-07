import { Expense } from "../models/expense.js";

const expenseRouter = express.Router();

//CREATE
const createExpense = async (req,res) => {
    const { titulo, descricao, valor } = req.body;

    try {
      const gasto = await Expense.create({ titulo, descricao, valor });
      res.status(200).json(gasto);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
}

//UPDATE

const updateExpense = async () => {}

//DELETE

const removeExpense = async () => {}

export { createExpense, updateExpense, removeExpense }
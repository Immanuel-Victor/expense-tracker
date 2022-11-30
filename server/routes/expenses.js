import express from "express";

const expenseRouter = express.Router();

// Get Routes

expenseRouter.get("/meus-gastos", (req, res) => {
  res.json({ msg: "Olá" });
});

expenseRouter.get("/meus-gastos/:id", (req, res) => {
  res.json({ msg: "Gasto 1" });
});

// Post Routes

expenseRouter.post('/meus-gastos', (req,res) => {
    res.json({ msg: "Novo gasto" });
})  

// Delete Routes

expenseRouter.delete('/meus-gastos/:id', (req,res) => {
    res.json({ msg: "Gasto removido" });
})  

// Patch Routes

expenseRouter.patch('/meus-gastos/:id', (req,res) => {
    res.json({ msg: "Gasto Atualizado" });
})  

export { expenseRouter };

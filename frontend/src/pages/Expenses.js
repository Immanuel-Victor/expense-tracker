import { useEffect } from "react";
import { ExpenseDetails } from "./ExpenseDetails";
import { ExpenseForm } from "./ExpenseForm";
import { useExpenseContext } from "../hooks/useExpenseContext";

function Expenses() {
  const localHost = 'http://localhost:4000'
  const {expenses, dispatch} = useExpenseContext()
  

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch(`${localHost}/api/gastos/meus-gastos`);
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_EXPENSE', payload:json})
      }
    }
    
    fetchExpenses();
  }, []);

  return (
    <div>
      <div className="expenses">
        {expenses && expenses.map((expense) => <ExpenseDetails key={expense._id} expense={expense}/>)}
      </div>
      <ExpenseForm/>
    </div>
  );
}

export { Expenses };

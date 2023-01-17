import { useEffect, useState } from "react";
import { ExpenseDetails } from "./ExpenseDetails";
import { ExpenseForm } from "./ExpenseForm";

function Expenses() {
  const [expenses, setExpenses] = useState(null);
  const localHost = 'http://localhost:4000'

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch(`${localHost}/api/gastos/meus-gastos`);
      const json = await response.json();

      if (response.ok) {
        setExpenses(json);
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

import { useEffect } from "react";
import { ExpenseDetails } from "./ExpenseDetails";
import { ExpenseForm } from "./ExpenseForm";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useAuthContext } from "../hooks/useAuthContext";

function Expenses() {
  const localHost = 'http://localhost:4000'
  const {expenses, dispatch} = useExpenseContext()
  const {user} = useAuthContext();
  

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch(`${localHost}/api/gastos/meus-gastos`, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'  
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_EXPENSE', payload:json})
      }
    }

    if(user){
      fetchExpenses();
    }

  }, [dispatch,user]);

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

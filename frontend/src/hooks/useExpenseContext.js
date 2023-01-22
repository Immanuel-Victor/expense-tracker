import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

function useExpenseContext() {
  const context = useContext(ExpenseContext);
  console.log("Context: ", context);

  if (!context) {
    throw Error("The expense context should have a Provider");
  }

  return context;
}

export { useExpenseContext };

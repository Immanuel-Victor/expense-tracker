import { createContext, useReducer } from "react";

const ExpenseContext = createContext();

function expenseReducer(state, action) {
  switch (action.type) {
    case "SET_EXPENSE":
    console.log('Entrou em setExpense: ', state,action)
      return {
        expenses: action.payload,
      };
    case "CREATE_EXPENSE":
      return {
        expenses: [action.payload, ...state.expenses],
      };
      case "DELETE_EXPENSE":
        return {
          expenses: state.expenses.filter((exp) => exp._id !== action.payload._id)
        };
      default: return state
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, { expenses: null });
  console.log("State: ",state)

  return <ExpenseContext.Provider value={{...state,dispatch}}>
    {children}
    </ExpenseContext.Provider>;
}

export { ExpenseContext, ExpenseContextProvider, expenseReducer };

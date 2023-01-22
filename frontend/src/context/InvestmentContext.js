import { createContext, useReducer } from "react";

const InvestmentContext = createContext();

function InvestmentReducer(state, action) {
  switch (action.type) {
    case "SET_INVESTMENT":
      return {
        investments: action.payload,
      };
    case "CREATE_INVESTMENT":
      return {
        investments: [action.payload, ...state.investments],
      };
    case "DELETE_INVESTMENT":
      return {
        investments: state.investments.filter((inv) => inv._id !== action.payload._id)
      };
      default: return state
  }
}

function InvestmentContextProvider({ children }) {
  const [state, dispatch] = useReducer(InvestmentReducer, { Investments: null });
  console.log("State: ",state)

  return <InvestmentContext.Provider value={{...state,dispatch}}>
    {children}
    </InvestmentContext.Provider>;
}

export { InvestmentContext, InvestmentContextProvider, InvestmentReducer };

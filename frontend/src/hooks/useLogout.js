import { useAuthContext } from "./useAuthContext";
import { useExpenseContext } from "./useExpenseContext";
import { useInvestmentContext } from "./useInvestmentContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: ExpenseDispatch } = useExpenseContext();
  const { dispatch: InvestimentDispatch } = useInvestmentContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    ExpenseDispatch({type: "SET_EXPENSE", payload: null})
    InvestimentDispatch({type: "SET_INVESTMENT", payload: null})
  };

  return { logout };
};

export { useLogout };

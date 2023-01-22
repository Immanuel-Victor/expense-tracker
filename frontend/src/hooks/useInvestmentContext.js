import { InvestmentContext } from "../context/InvestmentContext";
import { useContext } from "react";

function useInvestmentContext() {
  const context = useContext(InvestmentContext);
  console.log("Context: ", context);

  if (!context) {
    throw Error("The Investment context should have a Provider");
  }

  return context;
}

export { useInvestmentContext };

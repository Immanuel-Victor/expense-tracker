import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useInvestmentContext } from "../hooks/useInvestmentContext";
import { InvestmentForm } from "./InvestmentForm";
import { InvestmentDetails } from "./InvestmetDetails";

function Investments() {
  const {investments, dispatch} = useInvestmentContext();
  const localHost = "http://localhost:4000";
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchInvestment = async () => {
      const response = await fetch(
        `${localHost}/api/investimentos/meus-investimentos`,{
          headers: {
          'Authorization': `Bearer ${user.token}`,
          "Content-Type": "application/json",
        }
        });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_INVESTMENT', payload:json})
      }
    };
    if(user){
      fetchInvestment();
    }
    
  }, [dispatch,user]);

  return (
    <div>
      <div className="investments">
        {investments &&
          investments.map((investimento) => (
            <InvestmentDetails
              key={investimento._id}
              investimento={investimento}
            />
          ))}
      </div>
      <InvestmentForm />
    </div>
  );
}

export { Investments };

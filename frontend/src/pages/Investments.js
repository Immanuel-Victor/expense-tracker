import { useEffect, useState } from "react";
import { InvestmentDetails } from "./InvestmetDetails";

function Investments() {
  const [investimentos, setInvestimentos] = useState(null);
  const localHost = 'http://localhost:4000'

  useEffect(() => {
    const fetchInvestment = async () => {
      const response = await fetch(`${localHost}/api/investimentos/meus-investimentos`);
      const json = await response.json();

      if (response.ok) {
        setInvestimentos(json);
      }
    }
    
    fetchInvestment();
  }, []);

  return (
    <div>
      <div className="investments">
        {investimentos && investimentos.map((investimento) => <InvestmentDetails key={investimento._id} investimento={investimento}/>)}
      </div>
    </div>
  );
}

export { Investments };

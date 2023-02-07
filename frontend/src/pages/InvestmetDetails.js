import { useAuthContext } from "../hooks/useAuthContext";
import { useInvestmentContext } from "../hooks/useInvestmentContext";

function InvestmentDetails({ investimento }) {
  const localHost = "http://localhost:4000";
  const { dispatch } = useInvestmentContext();
  const { user } = useAuthContext();

  async function handleDelete() {
    const response = await fetch(
      `${localHost}/api/investimentos/meus-investimentos/` + investimento._id,
      {
        method: "DELETE",
        headers: { 'Authorization': `Bearer ${user.token}` },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_INVESTMENT", payload: json });
    }
  }

  return (
    <div className="investment-details">
      <h3>{investimento.titulo}</h3>
      <p>R$ {investimento.valor * (1 + investimento.rendimento)}</p>
      <p>{investimento.tipo}</p>
      <span className="delete" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
}

export { InvestmentDetails };

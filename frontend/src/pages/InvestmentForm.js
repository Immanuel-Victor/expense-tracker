import { useState } from "react";
import { useInvestmentContext } from "../hooks/useInvestmentContext";

function InvestmentForm() {
  const localHost = "http://localhost:4000";
  const {dispatch} = useInvestmentContext();
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState(0);
  const [rendimento, setRendimento] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const investimento = { titulo, valor, tipo, rendimento };
    const response = await fetch(`${localHost}/api/investimentos/meus-investimentos`, {
      method: "POST",
      body: JSON.stringify(investimento),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setTitulo("");
      setValor(0);
      setTipo("");
      setRendimento(0);
      console.log("investimento Adicionado com sucesso", investimento);
      dispatch({type: 'CREATE_INVESTMENT', payload:json})
    }
  };

  return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Adicionar investimento</h3>
        <label>Titulo</label>
        <input
          type="text"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <label>Tipo</label>
        <input
        type="text"
          onChange={(e) => setTipo(e.target.value)}
          value={tipo}
        />
        <label>Valor</label>
        <input
          type="number"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        />
        <label>Rendimento</label>
        <input
          type="number"
          onChange={(e) => setRendimento(e.target.value)}
          value={rendimento}
        />
        <button type="submit">Enviar</button>
        {error && <div className="erro">{error}</div>}
      </form>
  );
}

export { InvestmentForm };

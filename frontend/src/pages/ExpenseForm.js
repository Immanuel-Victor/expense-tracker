import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";

function ExpenseForm() {
  const localHost = "http://localhost:4000";
  const { dispatch } = useExpenseContext();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [error, setError] = useState(null);
  const {user} = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user){
      setError('You must be logged in')
      return
    }

    const gasto = { titulo, descricao, valor };
    const response = await fetch(`${localHost}/api/gastos/meus-gastos`, {
      method: "POST",
      body: JSON.stringify(gasto),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setTitulo("");
      setDescricao("");
      setValor(0);
      console.log("Gasto Adicionado com sucesso", gasto);
      dispatch({ type: "CREATE_EXPENSE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Adicionar gasto</h3>
      <label>Titulo</label>
      <input
        type="text"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
      />
      <label>Descricao</label>
      <textarea
        onChange={(e) => setDescricao(e.target.value)}
        value={descricao}
      />
      <label>Valor</label>
      <input
        type="number"
        onChange={(e) => setValor(e.target.value)}
        value={valor}
      />
      <button type="submit">Enviar</button>
      {error && <div className="erro">{error}</div>}
    </form>
  );
}

export { ExpenseForm };

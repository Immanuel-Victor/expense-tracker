import { useState } from "react";

function ExpenseForm() {
  const localHost = "http://localhost:4000";
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gasto = { titulo, descricao, valor };
    const response = await fetch(`${localHost}/api/gastos/meus-gastos`, {
      method: "POST",
      body: JSON.stringify(gasto),
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
      setDescricao("");
      setValor("");
      console.log("Gasto Adicionado com sucesso", gasto);
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

import { useExpenseContext } from "../hooks/useExpenseContext";

function ExpenseDetails({ expense }) {
  const localHost = "http://localhost:4000";
  const { dispatch } = useExpenseContext();

  async function handleDelete() {
    const response = await fetch(
      `${localHost}/api/gastos/meus-gastos/` + expense._id,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EXPENSE", payload: json });
    }
  }
  return (
    <div className="expense-details">
      <h3>{expense.titulo}</h3>
      <p>{expense.descricao}</p>
      <p>R$ {expense.valor}</p>
      <span className="delete" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
}

export { ExpenseDetails };

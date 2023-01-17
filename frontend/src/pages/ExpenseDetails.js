function ExpenseDetails({ expense }) {
    return(
        <div className="expense-details">
            <h3>{expense.titulo}</h3>
            <p>{expense.descricao}</p>
            <p>R$ {expense.valor}</p>
        </div>
    )
}

export { ExpenseDetails };

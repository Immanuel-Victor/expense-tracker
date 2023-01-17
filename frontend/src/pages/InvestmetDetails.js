function InvestmentDetails({ investimento }) {
    return(
        <div className="investment-details">
            <h3>{investimento.titulo}</h3>
            <p>R$ {investimento.valor}</p>
            <p>{investimento.tipo}</p>
            <p>{investimento.rendimento}</p>
        </div>
    )
}

export { InvestmentDetails };

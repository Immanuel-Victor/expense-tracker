import { Link } from "react-router-dom";

function NavBar() {

    return(
        <header>
            <div className="container">
                <Link to={"/"}><h1>Expense Tracker</h1></Link>
                <Link to={"/gastos"}><p>Meus gastos</p></Link>
                <Link to={"/investimentos"}><p>Meus investimentos</p></Link>
            </div>
        </header>

    )
}

export { NavBar };

import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Expense Tracker</h1>
        </Link>
      </div>
      <nav>
        {user && (
          <div>
            <button onClick={handleClick}>loggout</button>
            <Link to={"/gastos"}>
              <p>Meus gastos</p>
            </Link>
            <Link to={"/investimentos"}>
              <p>Meus investimentos</p>
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to={"/login"}>
              <p>Login</p>
            </Link>
            <Link to={"/signup"}>
              <p>Registro</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export { NavBar };

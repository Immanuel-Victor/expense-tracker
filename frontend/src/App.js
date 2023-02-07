import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Expenses } from "./pages/Expenses";
import { Home } from "./pages/Home";
import { Investments } from "./pages/Investments";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/gastos"
              element={user ? <Expenses /> : <Navigate to="/login" />}
            />
            <Route
              path="/investimentos"
              element={user ? <Investments /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

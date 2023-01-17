import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { Expenses } from './pages/Expenses';
import { Home } from './pages/Home';
import { Investments } from './pages/Investments';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="pages">
          <Routes>
            <Route 
            path='/'
            element={<Home/>}
            />
            <Route 
            path='/gastos'
            element={<Expenses/>}
            />
                        <Route 
            path='/investimentos'
            element={<Investments/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { ExpenseContextProvider } from './context/ExpenseContext';
import { InvestmentContextProvider } from './context/InvestmentContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ExpenseContextProvider>
        <InvestmentContextProvider>
          <App />
        </InvestmentContextProvider>
      </ExpenseContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

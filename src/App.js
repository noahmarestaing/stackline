import React from 'react';
import logo from './logo.svg';
import './App.css';
import SalesProvider from './contexts/SalesContext'
import Sales from './pages/sales';

function App() {
  return (
    <div className="App">
      <SalesProvider>
        <Sales/>
      </SalesProvider>
    </div>
  );
}

export default App;

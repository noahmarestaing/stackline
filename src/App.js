import React from 'react';
import logo from './logo.svg';
import './App.css';
import SalesProvider from './contexts/SalesContext'
import GraphPage from './pages/GraphPage';

function App() {
  return (
    <div className="App">
      <SalesProvider>
        <div>hey</div>
        <GraphPage/>
      </SalesProvider>
    </div>
  );
}

export default App;

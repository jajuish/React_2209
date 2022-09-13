import React from 'react';
import './App.css';

import { Product } from "./components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          My react ts app
        </h2>
      </header>

      <Product />
      
    </div>
  );
}

export default App;

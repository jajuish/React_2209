import './App.css';

import Car from './components/Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Car list={[1,2]} />
    </div>
  );
}

export default App;

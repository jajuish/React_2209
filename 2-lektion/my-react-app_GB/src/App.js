import './App.css';
import { List, Flexform, Image, Table } from "./components"
import BackToTop from "react-back-to-top-button";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>

      <List />
      <Image />
      <Flexform />
      <Table />

      <BackToTop
        showOnScrollUp={false}
        showAt={100}
        speed={100}
        easing="easeOutSine"
      >
        <span>^</span>
      </BackToTop>
      
    </div>
  );
}

export default App;

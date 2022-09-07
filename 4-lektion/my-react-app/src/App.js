import { useState } from 'react';
import './App.css';
import { Image, Form, MyButton } from "./components"

import { Link } from "react-router-dom";

function App() {
  const [formTitle, setFormTitle] = useState("title")

  const onButtonClick = () => setFormTitle(`[${formTitle}]`)

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Image />

      <button onClick={onButtonClick}>Change title</button>
      <Form formTitle={formTitle} />
      <MyButton onButtonClick={onButtonClick} />

    </div>
  );
}

export default App;

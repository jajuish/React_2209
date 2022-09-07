import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</BrowserRouter>
);
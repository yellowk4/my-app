import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";

function App() {
  return (
    <div className="App">
			<nav>
				<Link to="/">Home</Link>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<Link to="/about">About</Link>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<Link to="/counter">Counter</Link>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<Link to="/input">Input</Link>
			</nav>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/counter" element={ <Counter /> } />
				<Route path="/input" element={ <Input /> } />
			</Routes>
    </div>
  );
}

export default App;

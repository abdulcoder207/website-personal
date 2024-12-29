import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Words from "./components/Words.jsx"
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Words />
    </div>
  );
}

export default App;

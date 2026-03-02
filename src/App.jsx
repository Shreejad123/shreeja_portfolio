import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./navBar";
import Image from "./image";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <About className="column" />
        <Image className="column"></Image>
      </div>
    </>
  );
}

export default App;

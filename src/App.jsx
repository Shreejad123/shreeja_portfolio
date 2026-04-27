import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import NavBar from "./navBar";
import Image from "./image";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Home className={styles.column} />
        <Image className={styles.column}></Image>
      </div>
    </>
  );
}

export default App;

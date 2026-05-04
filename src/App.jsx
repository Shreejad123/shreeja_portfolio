import React from "react";
import ThemeToggleButton from "./components/themeTogglebutton";
import Home from "./components/home";
import NavBar from "./navBar";
import Image from "./image";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar className={styles.NavBar} />
      <div className={styles.container}>
        <Home className={styles.column} />
        <div className={styles.imageContainer}>
          {" "}
          <Image className={styles.Image}></Image>{" "}
        </div>
      </div>
    </>
  );
}

export default App;

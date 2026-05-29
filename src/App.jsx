import React from "react";
import ThemeToggleButton from "./components/themeTogglebutton";
import Home from "./components/home";
import NavBar from "./navBar";
import Image from "./image";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import About from "./components/about";
import Project from "./components/project";
import { BsTypescript } from "react-icons/bs";
import Skills from "./components/skills";
function App() {
  return (
    <>
      {" "}
      <NavBar className={styles.NavBar} />
      <div className={styles.container}>
        <Home className={styles.column} />
        <div className={styles.imageContainer}>
          {" "}
          <Image className={styles.Image}></Image>{" "}
          <div className={styles.skills}>
            <span className={styles.lines}>
              {" "}
              <FaReact
                style={{
                  fontSize: 30,
                  color: "#1E90FF",
                  marginLeft: 30,
                  marginTop: 10,
                  marginRight: 3,
                  marginBottom: 10,
                }}
              />
              <IoLogoJavascript
                style={{
                  fontSize: 30,
                  color: "#F0E68C",
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 3,
                  marginBottom: 10,
                }}
              />
              <FaBootstrap
                style={{
                  fontSize: 30,
                  color: "#7952B3",
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 3,
                  marginBottom: 10,
                }}
              />{" "}
              <RiNextjsFill
                style={{
                  fontSize: 40,
                  marginRight: 3,
                  marginLeft: 20,
                  marginTop: 10,
                  color: "yellow",
                  marginBottom: 10,
                }}
              />
              <BsTypescript
                style={{
                  fontSize: 36,
                  marginRight: 3,
                  marginLeft: 20,
                  marginTop: 10,
                  color: "#3178C6",
                  marginBottom: 10,
                }}
              />
            </span>
            <div className={styles.techStack}>
              <span className={styles.tech}>React js</span>
              <span className={styles.tech}>JavaScript</span>
              <span className={styles.tech}>Bootstrap</span>
              <span className={styles.tech}>Next js</span>
              <span className={styles.tech}>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
      <Project />
      <About></About>
      <Skills></Skills>
    </>
  );
}

export default App;

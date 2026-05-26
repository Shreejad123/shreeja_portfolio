import React from "react";
import ThemeToggleButton from "./components/themeTogglebutton";
import Home from "./components/home";
import NavBar from "./navBar";
import Image from "./image";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Projects from "./components/projects";
function App() {
  return (
    <>
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
              <FaHtml5
                style={{
                  fontSize: 30,
                  color: "#FF4500",
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 3,
                  marginBottom: 10,
                }}
              />{" "}
              <FaCss3Alt
                style={{
                  fontSize: 40,
                  marginRight: 3,
                  marginLeft: 20,
                  marginTop: 10,
                  color: "#1E90FF",
                  marginBottom: 10,
                }}
              />
            </span>
            <div className={styles.techStack}>
              <span className={styles.tech}>React js</span>
              <span className={styles.tech}>Javascript</span>
              <span className={styles.tech}>HTML</span>
              <span className={styles.tech}>CSS</span>
            </div>
          </div>
          <div className={styles.comunicationContainer}>
            <a
              href="https://github.com/Shreejad123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} className={styles.comunication} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} className={styles.comunication} />
            </a>
            <a href="tel:+91 9483350641">
              <FaPhone className={styles.comunication} />
            </a>
            <a href="mailto:shreejadkotian00@gmail.com">
              <MdEmail size={20} className={styles.comunication} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

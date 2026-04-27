import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "./skills.module.css";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import NavBar from "../navBar";
function Skills() {
  return (
    <>
      <NavBar />
      <div className={styles.containerSection}>
        <h1 className={styles.header}>Skills</h1>
        <p className={styles.header}>
          Here are some of the Technologies and tools I work with
        </p>
        <div className={styles.container}>
          <div className={styles.icons}>
            <FaReact
              style={{
                fontSize: 45,
                color: "#1E90FF",
                marginLeft: 20,
                marginTop: 10,
                marginRight: 3,
              }}
            />
            &nbsp; React
          </div>
          <div className={styles.icons}>
            <IoLogoJavascript
              style={{
                fontSize: 45,
                color: "#F0E68C",
                marginLeft: 20,
                marginTop: 10,
                marginRight: 3,
              }}
            />
            Javascript
          </div>
          <div className={styles.icons}>
            <FaHtml5
              style={{
                fontSize: 45,
                color: "#FF4500",
                marginLeft: 20,
                marginTop: 10,
                marginRight: 3,
              }}
            />
            HTML5
          </div>
          <div className={styles.icons}>
            <FaGithub
              style={{
                fontSize: 45,
                marginLeft: 20,
                marginTop: 10,
                marginRight: 3,
                color: "#FF4500",
              }}
            ></FaGithub>
            Git
          </div>
          <div className={styles.icons}>
            <FaGithub
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
              }}
            ></FaGithub>
            GitHub
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.icons}>
            <FaCss3Alt
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
                color: "#1E90FF",
              }}
            />
            CSS
          </div>
          <div className={styles.icons}>
            {" "}
            <SiNextdotjs
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
              }}
            />
            NextJs
          </div>
          <div className={styles.icons}>
            <SiTypescript
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
                color: " #6495ED",
              }}
            />
            TypeScript
          </div>
          <div className={styles.icons}>
            <AiOutlineApi
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
                color: "#1E90FF",
              }}
            />
            Restful Api's
          </div>
          <div className={styles.icons}>
            <SiRedux
              style={{
                fontSize: 40,
                marginRight: 3,
                marginLeft: 20,
                marginTop: 10,
                color: "#8B008B",
              }}
            />
            Redux
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

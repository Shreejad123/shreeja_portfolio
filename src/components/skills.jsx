import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "./skills.module.css";
function Skills() {
  return (
    <>
      <div className={styles.containerSection}>
        <h1 className={styles.header}>Skills</h1>
        <p className={styles.header}>
          Here are some of the Technologies and tools I work with
        </p>
        <div className={styles.container}>
          <div>
            <FaReact />
            React
          </div>
          <div>Javasscript</div>
          <div>HTML5</div>
          <div>Git</div>
          <div>GitHub</div>
        </div>
        <div>Tailwind CSS</div>
        <div>NextJs</div>
        <div>TypeScript</div>
        <div>Restful Api's</div>
        <div>Next js</div>
      </div>
    </>
  );
}

export default Skills;

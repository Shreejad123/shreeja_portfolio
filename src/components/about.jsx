import styles from "./about.module.css";
import aboutImage from "../assets/about.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.header}>
          Passionate Frontend Developer crafting modern and scalable web
          experiences.
        </p>
        <div className={styles.section}>
          <div className={styles.card}>
            Frontend Developer with around 1 year of experience in React.js and
            JavaScript (ES6+), along with 3+ years of experience in QA
            Automation. Self-taught, curious, and focused on clean, efficient
            solution
            <img
              className={styles.image}
              src={aboutImage}
              alt="This is a car image"
            ></img>
          </div>

          <div className={styles.cards}>
            <ul>
              What I Focus On
              <li>
                {" "}
                <FaCheckCircle
                  style={{ marginRight: 5, color: "green" }}
                ></FaCheckCircle>
                Building responsive and scalable web applications
              </li>
              <li>
                {" "}
                <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                Creating reusable and maintainable UI components
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  style={{ marginRight: 5, color: "green" }}
                ></FaCheckCircle>
                Writing clean, readable, and efficient code
              </li>
              <li>
                {" "}
                <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                Optimizing frontend performance • Ensuring cross-browser
                compatibility
              </li>
              <li>
                {" "}
                <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                Delivering smooth and user-friendly experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

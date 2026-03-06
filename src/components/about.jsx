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
            I am a Frontend Developer with over 3 years of overall IT
            experience, including 1+ year of hands-on expertise in building
            responsive and scalable web applications using React.js and modern
            JavaScript (ES6+). As a self-taught programmer, I am driven by
            curiosity, continuous learning, and a strong desire to solve
            real-world problems through clean and efficient code.
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
            <div className={styles.techstack}>
              <h5>Technologies I Work With</h5>
              <ul>
                <li>
                  <FaReact style={{ color: "green", marginRight: 10 }} />
                  React.js
                </li>
                <li>
                  <IoLogoJavascript
                    style={{ color: "green", marginRight: 10 }}
                  />
                  JavaScript (ES6+)
                </li>
                <li>
                  <FaHtml5 style={{ color: "green", marginRight: 10 }} />
                  HTML5
                </li>
                <li>
                  <FaCss3Alt style={{ color: "green", marginRight: 10 }} />
                  CSS3
                </li>

                <li>
                  <FaGithub style={{ color: "green", marginRight: 10 }} />
                  Git / GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

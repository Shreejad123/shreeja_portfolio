import styles from "./about.module.css";
import aboutImage from "../assets/about.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import NavBar from "../navBar";
import { TiStar } from "react-icons/ti";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={ref}
        className={styles.container}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.header}>
          Passionate Frontend Developer crafting modern and scalable web
          experiences.
        </p>
        <div className={styles.section}>
          <div className={styles.card}>
            <ul>
              <li>
                <TiStar size={20} style={{ marginRight: 5, color: "green" }} />
                Frontend Developer with ~1 year of experience in React.js and
                JavaScript, backed by 3+ years in QA Automation.
              </li>
              <li>
                <TiStar size={20} style={{ marginRight: 5, color: "green" }} />I
                build responsive web applications with a focus on <br></br>
                performance, clean UI, and user experience.
              </li>
            </ul>
            <img
              className={styles.image}
              src={aboutImage}
              alt="This is a car image"
            ></img>
          </div>

          <div className={styles.cards}>
            <ul>
              <h4 className={styles.headers}>
                <b>What I Focus On</b>
              </h4>
              <div className={styles.paragraph}>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle
                    style={{ marginRight: 5, color: "green" }}
                  ></FaCheckCircle>
                  Building responsive web applications
                </li>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle
                    style={{ marginRight: 5, color: "green" }}
                  ></FaCheckCircle>
                  Creating user-friendly interfaces
                </li>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                  Developing reusable UI components
                </li>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                  Writing clean and maintainable code
                </li>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                  Delivering seamless user experiences
                </li>
                <li className={styles.lines}>
                  {" "}
                  <FaCheckCircle style={{ marginRight: 5, color: "green" }} />
                  Optimizing performance & cross-browser compatibility
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

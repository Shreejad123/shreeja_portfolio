import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.homeSection}>
        <h2 className={styles.header}>
          <b>Hi, I’m Shreeja D Kotian </b>
        </h2>
        <p className={styles.paragraph}>
          <b>Frontend Web Developer</b>
        </p>
        <p className={styles.lines}>
          <ul>
            <li>
              <FaRegCheckCircle
                style={{
                  color: "#1E90FF",
                }}
              />
              &nbsp; Around 1 year of experience in IT, specializing in React.js
            </li>
            <li>
              <FaRegCheckCircle
                style={{
                  color: "#1E90FF",
                }}
              />{" "}
              &nbsp; Strong in JavaScript (ES6+), HTML5, and CSS3
            </li>{" "}
            <li>
              <FaRegCheckCircle
                style={{
                  color: "#1E90FF",
                }}
              />{" "}
              &nbsp; Experienced in building responsive web applications & REST
              APIs
            </li>
            <FaRegCheckCircle
              style={{
                color: "#1E90FF",
              }}
            />{" "}
            &nbsp; Focused on performance optimization and clean UI design
            <li />
          </ul>
        </p>
        <div className={styles.button}>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className={`btn btn-info ${styles.customBtn}`}
          >
            About me
          </button>
          <button
            type="button"
            className={`btn btn-info ${styles.customBtn}`}
            onClick={() => navigate("/projects")}
          >
            View my Projects
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

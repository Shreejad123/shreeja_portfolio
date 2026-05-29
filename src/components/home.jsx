import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { PiHandWavingDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.homeSection}>
        <p>
          <PiHandWavingDuotone className={styles.handicon} /> Hi, &nbsp;I'm
        </p>
        <h3 className={styles.header}>
          <b>Shreeja D Kotian</b>
        </h3>
        <p className={styles.paragraph}>
          <b>Frontend Web Developer</b>
        </p>
        <p className={styles.lines}>
          I build responsive,accesible and performat web applications <br></br>
          using modern React Ecosystem and clean UI/UX
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
    </>
  );
}

export default Home;

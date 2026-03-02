import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./about.module.css";
function About() {
  return (
    <>
      <div className={styles.aboutSection}>
        <p className={styles.welcome}>
          <b>Welcome to my site</b>
        </p>

        <h2 className={styles.header}>
          <b>Hi, I’m Shreeja D Kotian, </b>
        </h2>
        <p className={styles.paragraph}>
          <b>frontend Web Developer</b>
        </p>
        <p className={styles.paragraph}>
          Frontend Developer with 3+ years of IT experience and 1+ year
          specializing in React.js development. Proficient in JavaScript (ES6+),
          HTML5, and CSS3, with experience building responsive web applications
          and REST API integrations. <br></br>A self-taught developer passionate
          about clean code, UI performance <br></br>optimization, and modern
          frontend practices, with strong problem-solving and <br></br>{" "}
          communication skills.
        </p>
        <button type="button" className={`btn btn-info ${styles.customBtn}`}>
          About me
        </button>
        <button type="button" className={`btn btn-info ${styles.customBtn}`}>
          See my Projects
        </button>
      </div>
    </>
  );
}

export default About;

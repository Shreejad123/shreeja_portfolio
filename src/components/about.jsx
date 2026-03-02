import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./about.module.css";
function About() {
  return (
    <>
      <div className={styles.aboutSection}>
        <p className={styles.welcome}>Welcome to my site</p>

        <h2 className={styles.header}>
          <b>Hi, I’m Shreeja D Kotian, </b>
        </h2>
        <p className={styles.paragraph}>
          <b>frontend Web Developer</b>
        </p>
        <p className={styles.paragraph}>
          I am a focused and talented B.Sc.CSIT student currently pursuing my
          bachelor degree from Asian School of Management and Technology.See
          More..
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

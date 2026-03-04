import styles from "./about.module.css";
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
          </div>
          <div className={styles.card}>
            <ul>
              What I Focus On
              <li> Building responsive and scalable web applications</li>
              <li>Creating reusable and maintainable UI components</li>
              <li>Writing clean, readable, and efficient code</li>
              <li>
                Optimizing frontend performance • Ensuring cross-browser
                compatibility
              </li>
              <li>Delivering smooth and user-friendly experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

import styles from "./projects.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Projects = ({ List }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % List.img.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [List.img.length]);
  console.log("list", List.img);
  console.log("list", List.img.length);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out",
        }}
        className={styles.container}
      >
        <h6>{List.title}</h6>
        <img src={List.img[index]} alt={List.title} className={styles.image} />

        <p className={styles.description}>{List.description}</p>
        <p className={styles.tech}>Tech: {List.tech}</p>
        <div className={styles.buttonContainer}>
          <button
            className={`btn btn-info ${styles.customBtn}`}
            onClick={() => window.open(List.liveDemo, "_blank")}
          >
            Live Demo
          </button>

          <button
            className={`btn btn-info ${styles.customBtn}`}
            onClick={() => window.open(List.github, "_blank")}
          >
            View Code
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;

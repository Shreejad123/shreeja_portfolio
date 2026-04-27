import styles from "./projects.module.css";
import { useState, useEffect } from "react";

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
  return (
    <>
      <div className={styles.container}>
        <h3>{List.title}</h3>
        <img src={List.img[index]} alt={List.title} className={styles.image} />

        <p className={styles.description}>{List.description}</p>
        <p>Tech: {List.tech}</p>
        <div className={styles.custombtn}>
          <button
            className="btn btn-info"
            onClick={() => window.open(List.liveDemo, "_blank")}
          >
            Live Demo
          </button>
          <button
            className="btn btn-danger"
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

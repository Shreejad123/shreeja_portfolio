import styles from "./projects.module.css";

const Projects = ({ List }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>{List.title}</h3>
        <img src={List.img} className={styles.image} alt="project" />
        <p>{List.description}</p>
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

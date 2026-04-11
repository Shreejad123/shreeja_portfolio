import Projects from "./projects.jsx";
import styles from "./project.module.css";
import dashboard from "../Images/dashboard.png";
import Home from "../Images/home.png";
function Project() {
  const projectList = [
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "Frontend dashboard for managing patient records and surgery tracking with dynamic forms and API integration.",
      tech: "React, REST API, Bootstrap",
      github: "https://github.com/Shreejad123/healthlogix",
      liveDemo: "https://healthlogix-7pr3.vercel.app/",
      img: dashboard,
    },

    {
      id: 2,
      title: "Shopping Cart App",
      description:
        "A React e-commerce application with product listing, filtering, cart management, and localStorage support.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/Shreejad123/E-COMMERCE-PROJECT",
      liveDemo: "https://e-commerce-project-ec1o.vercel.app/",
      img: Home,
    },
  ];

  return (
    <section>
      <h2 className={styles.header}>Projects</h2>

      <div className={styles.container}>
        {projectList.map((project) => (
          <Projects key={project.id} List={project}></Projects>
        ))}
      </div>
    </section>
  );
}

export default Project;

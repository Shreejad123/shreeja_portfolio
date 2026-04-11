import Projects from "./projects.jsx";
import styles from "./project.module.css";
import dashboard from "../Images/dashboard.png";
import Home from "../Images/home.png";
import viewDetails from "../Images/viewDetails.png";
import darkMode from "../Images/darkMode.png";
import statsCard from "../Images/statsCard.png";
import surgeryTable from "../Images/surgeryTable.png";
import products from "../Images/products.png";
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
      img: [dashboard, darkMode, statsCard, surgeryTable],
    },

    {
      id: 2,
      title: "Shopping Cart App",
      description:
        "A React e-commerce application with product listing, filtering, cart management, and localStorage support.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/Shreejad123/E-COMMERCE-PROJECT",
      liveDemo: "https://e-commerce-project-ec1o.vercel.app/",
      img: [Home, products, surgeryTable],
    },
  ];

  return (
    <section>
      <h2 className={styles.header}>Projects</h2>

      <div className={styles.container}>
        {projectList.map((project) => (
          <div key={project.id}>
            <Projects List={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;

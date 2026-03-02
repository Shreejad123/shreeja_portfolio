import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Shopping Cart App",
      description:
        "A React e-commerce application with product listing, filtering, cart management, and localStorage support.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/yourusername/shopping-cart",
    },
    {
      title: "Hospital Management System",
      description:
        "Frontend dashboard for managing patient records and surgery tracking with dynamic forms and API integration.",
      tech: "React, REST API, Bootstrap",
      github: "https://github.com/yourusername/hospital-management",
    },
  ];

  return (
    <section className="box">
      <h2>Projects</h2>

      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tech: {project.tech}</p>

            <a href={project.github} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

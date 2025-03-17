import React from "react";
import "../styles/projectSection.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import figma2 from "../assets/figma2.png";
import aura from "../assets/aura.png";

const WorkSection = () => {
  const projects = [
    {
        title: "Registration Website for Aura25",
        subtitle: "Realtime Project | REACT",
        image: aura,
        tools: [
          "React",
          "Framer motion",
          "Gform",
          "Vercel",
          "Hostinger"
        ],
        liveLink: "https://www.aura25.site",
        description: "Developed the Aura event registration website using React, featuring Framer Motion, scroll effects, and a sleek design. Integrated Google Forms for user data registration."
      },
    {
      title: "Website for Symposium",
      subtitle: "Realtime Project | MERN Stack",
      image: project1,
      tools: ["React", "MongoDB", "Node", "Express", "JWT", "Vercel"],
      liveLink: "https://progeni25.vercel.app/",
      description:
        "Developed a symposium website with JWT authentication, user profiles, QR code-based payment verification, and MongoDB integration for seamless registration and data management.",
    },
    {
      title: "UI design for youtuber",
      subtitle: "Realtime Project | Figma design",
      image: figma2,
      tools: ["Figma", "Unsplash"],
      liveLink:
        "https://www.figma.com/design/J2w0M341gDQDaVyXvwTyVG/Youtuber-Design?node-id=0-1&t=4XkPFc0d1hWf30UK-1",
      description:
        "Designed a modern UI in Figma for a movie review YouTuber’s website, focusing on showcasing videos and enhancing user engagement.",
    },

  ];

  return (
    <div className="project-section" id="projectid">
      <h1 className="section-heading">
        My <span>Works</span>
      </h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <p className="project-title">{project.title}</p>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-card-bottom">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                <i className="fas fa-eye eye"></i> Preview
              </a>
              <a href="https://github.com/your-repo" target="_blank" className="github-code">
                <i class="fab fa-github git"></i> Code
              </a>
              </div>

              {/* <div className="tools-used">{project.tools.join(", ")}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;

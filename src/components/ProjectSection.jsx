import React, { useEffect }  from "react";
import "../styles/projectSection.css";
import project2 from "../assets/project2.png";
import grocery from "../assets/grocery.png";
import museum from "../assets/museum.jpg";
import ScrollReveal from "scrollreveal";

const ProjectSection = () => {
  const projects = [
    {
      title: "Modern Ecommerce Website",
      subtitle: "REACT",
      image: grocery,
      tools: ["React", "Removebg", "Framer motion", "Vercel"],
      liveLink: "https://algomox-groceryshop-3z7i.vercel.app/",
      github: "https://github.com/raghul1217/Algomox-Groceryshop",
      description:
        "A sleek e-commerce platform with a modern design, dynamic cart and wishlist, robust filters, and a budget tracker for a seamless shopping experience.",
    },
    {
      title: "E-Products shopping",
      subtitle: "MERN Stack",
      image: project2,
      tools: [
        "React",
        "Node",
        "Express",
        "Tailwind",
        "Cloudinary",
        "MongoDB",
        "Vercel",
      ],
      liveLink: "https://digi-frontend-bay.vercel.app",
      github: "https://github.com/raghul1217/Project_expo_stripe?tab=readme-ov-file",
      description: "Developed a MERN stack shopping cart website with full CRUD functionality, featuring an admin panel for efficient product management, editing, and updates."
    },
    {
      title: "Museum UI design",
      subtitle: "Realtime Project | Figma design",
      image: museum,
      tools: ["Figma", "Unsplash", "Iconify"],
      liveLink:
        "https://www.figma.com/design/TRea6h6M2UKkwBtAkDVr5V/REVIVE24-MUSEUM?node-id=0-1&t=Wo5140NiCp6dVTXU-1",
      github: "https://www.figma.com/design/TRea6h6M2UKkwBtAkDVr5V/REVIVE24-MUSEUM?node-id=0-1&t=Wo5140NiCp6dVTXU-1",
      description:
        "Designed a modern UI in Figma for a museum website, focusing on showcasing the mulitple events and historical statues and conducting virtual tours.",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
      beforeReveal: (el) => {
        el.style.transform = "none"; 
      },
    });

    sr.reveal(".project-card", { interval: 250 });

    return () => sr.destroy(); 
  }, []);

  return (
    <div className="project-section" id="projectid">
      <h1 className="section-heading">
        My <span>Projects</span>
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
              <a href={project.github} target="_blank" className="github-code">
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

export default ProjectSection;

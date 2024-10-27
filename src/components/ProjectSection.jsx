import React from 'react';
import '../styles/projectSection.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import figma2 from '../assets/figma2.png';

const ProjectSection = () => {
    const projects = [
        {
            title: "Website for Symposium",
            subtitle: "Realtime Project | MERN Stack",
            image: project1,
            tools: ["React", "MongoDB", "Node", "Express", "JWT", "Vercel"],
            liveLink: "https://progeni25.vercel.app/",
            description: "Developed a comprehensive website for my college symposium, enabling seamless online registration for students. The site includes JWT authentication for secure login and registration, a dedicated profile page for each user, and a QR code scanner for payment verification. Google Forms was integrated for streamlined registration and data management."
        },
        {
            title: "UI design for youtuber",
            subtitle: "Realtime Project | Figma design",
            image: figma2,
            tools: ["Figma", "Unsplash"],
            liveLink: "https://www.figma.com/design/J2w0M341gDQDaVyXvwTyVG/Youtuber-Design?node-id=0-1&t=4XkPFc0d1hWf30UK-1",
            description: "Designed a user interface in Figma for a YouTuber specializing in movie reviews. The goal was to create a website where he could feature his YouTube content. I took on the role of UI designer, focusing on a clean, modern aesthetic to showcase his videos and enhance user engagement."
        },
        {
            title: "E-Products shopping",
            subtitle: "MERN Stack",
            image: project2,
            tools: ["React", "Node", "Express", "Tailwind", "Cloudinary", "MongoDB", "Vercel"],
            liveLink: "https://digi-frontend-bay.vercel.app",
            description: "Developed a shopping cart website to enhance my MERN stack skills, focusing on full CRUD operations for product management. The site includes features for adding, updating, and deleting products, with a dedicated admin page for streamlined product management and editing."
        },
    ];

    return (
        <div className="project-section">
            <h1 className="section-heading">My <span>Projects</span></h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <p className="project-title">{project.title}</p>
                            <p className='project-subtitle'>{project.subtitle}</p>
                            <p className="project-description">{project.description}</p>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                                View Live🔗
                            </a>
                            <div className="tools-used">
                                {project.tools.join(", ")}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;

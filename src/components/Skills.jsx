import React, { useState } from 'react';
import '../styles/skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
    const skillsData = {
        "Frontend": [
            { name: "HTML", level: 90, icon: "fab fa-html5" },
            { name: "CSS", level: 85, icon: "fab fa-css3-alt" },
            { name: "JavaScript", level: 75, icon: "fab fa-js" },
            { name: "React", level: 80, icon: "fab fa-react" },
            { name: "Sass", level: 80, icon: "fab fa-sass" }
        ],
        "UI Libraries": [
            { name: "Bootstrap", level: 85, icon: "fab fa-bootstrap" },
            { name: "Tailwind CSS", level: 70, icon: "fas fa-wind" },
            { name: "Daisy UI", level: 65, icon: "fas fa-gem" },
            { name: "Framer Motion", level: 60, icon: "fas fa-wave-square" },
            { name: "EmailJS", level: 70, icon: "fas fa-envelope" }
        ],
        "Backend": [
            { name: "Node.js", level: 65, icon: "fab fa-node-js" },
            { name: "Express.js", level: 65, icon: "fas fa-server" },
            { name: "MongoDB", level: 80, icon: "fas fa-database" },
            { name: "MySQL", level: 75, icon: "fas fa-database" },
            { name: "Cloudinary", level: 70, icon: "fas fa-cloud-upload-alt" }
        ],
        "Version Control": [
            { name: "Git", level: 85, icon: "fab fa-git-alt" },
            { name: "GitHub", level: 85, icon: "fab fa-github" },
            { name: "Vercel", level: 80, icon: "fas fa-rocket" },
            { name: "Netlify", level: 80, icon: "fas fa-cloud" },
            // { name: "Postman", level: 80, icon: "fas fa-cloud" }
        ],
        "UI/UX": [
            { name: "Figma", level: 90, icon: "fab fa-figma" },
            { name: "Canva", level: 85, icon: "fas fa-paint-brush" },
            { name: "Adobe XD", level: 65, icon: "fas fa-vector-square" }
            
        ],
        "Soft Skills": [
            { name: "Communication", level: 85, icon: "fas fa-comments" },
            { name: "Adaptability", level: 90, icon: "fas fa-comments" },
            { name: "Time Management", level: 85, icon: "fas fa-comments" },
            { name: "Team Work", level: 85, icon: "fas fa-comments" },
             
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    const icons = {
        "Frontend": 'bx bx-code',
        "UI Libraries": 'bx bx-layer',
        "Backend": 'bx bx-server',
        "Version Control": 'bx bx-cloud',
        "UI/UX": 'bx bx-paint',
        "Soft Skills": 'bx bx-cog'
    };

    return (
        <div className="skills-section" id='skillsid'>
            <h1 className="overall-heading">My <span>Skills</span></h1>
            <div className="skills-container">
                <div className="skills-buttons-container">
                    <div className="skills-buttons">
                        {Object.keys(skillsData).map((category) => (
                            <button 
                                key={category}
                                className={selectedCategory === category ? 'active' : ''}
                                onClick={() => setSelectedCategory(category)}
                            >
                                <i className={icons[category]}></i>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="skills-display-container">
                    <h2 className="skills-heading">
                        {selectedCategory} Skills
                    </h2>
                    <div className="separator-line"></div>
                    <div className="skills-display">
                        {skillsData[selectedCategory].map(skill => (
                            <div className="skill" key={skill.name}>
                                <div className="skill-title">
                                    <div className='skill-name'>
                                        <i className={`${skill.icon} skill-icon`}></i>
                                        {skill.name}
                                    </div>
                                    <div>
                                        {skill.level}%
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-bar-fill" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

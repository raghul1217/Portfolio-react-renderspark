import React, { useState } from 'react';
import '../styles/skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
    const skillsData = {
        frontend: [
            { name: "HTML", level: 90, icon: "fab fa-html5" },
            { name: "CSS", level: 85, icon: "fab fa-css3-alt" },
            { name: "JavaScript", level: 75, icon: "fab fa-js" },
            { name: "React", level: 80, icon: "fab fa-react" },
            { name: "Tailwind", level: 70, icon: "fas fa-wind" }
        ],
        backend: [
            { name: "MongoDB", level: 80, icon: "fas fa-database" },
            { name: "MySQL", level: 75, icon: "fas fa-database" },
            { name: "Node.js", level: 65, icon: "fab fa-node-js" },
            { name: "Express.js", level: 65, icon: "fas fa-server" }
        ],
        Programming: [
            { name: "Java", level: 80, icon: "fab fa-java" },
            { name: "Python", level: 70, icon: "fab fa-python" },
            { name: "C++", level: 60, icon: "fas fa-code" },
            { name: "C", level: 60, icon: "fas fa-code" }
        ],
        "API-Testing": [
            { name: "Postman", level: 80, icon: "fas fa-cloud-download-alt" },
            { name: "ThunderClient", level: 75, icon: "fas fa-bolt" },
            { name: "Vercel", level: 80, icon: "fas fa-rocket" },
            { name: "Netlify", level: 80, icon: "fas fa-cloud" }
        ],
        "UI/UX": [
            { name: "Figma", level: 90, icon: "fab fa-figma" },
            { name: "Canva", level: 85, icon: "fas fa-paint-brush" },
            { name: "AdobeXd", level: 65, icon: "fas fa-paint-brush" },
            { name: "Photoshop", level: 60, icon: "fas fa-paint-brush" }
        ],
        other: [
            { name: "Git & Github", level: 85, icon: "fab fa-github" },
            { name: "Type Writing", level: 80, icon: "fas fa-keyboard" },
            { name: "Communication", level: 80, icon: "fas fa-comments" }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('frontend');

    const icons = {
        frontend: 'bx bx-code',
        backend: 'bx bx-server',
        Programming: 'bx bx-terminal',
        "API-Testing": 'bx bx-cloud-download',
        "UI/UX": 'bx bx-paint',
        other: 'bx bx-cog'
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
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="skills-display-container">
                    <h2 className="skills-heading">
                        {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Skills
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

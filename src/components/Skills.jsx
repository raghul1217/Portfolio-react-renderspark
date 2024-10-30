import React, { useState } from 'react';
import '../styles/skills.css';

const Skills = () => {
    const skillsData = {
        frontend: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 75 },
            { name: "React", level: 80 },
            { name: "Tailwind", level: 70 }
        ],
        backend: [
            { name: "MongoDB", level: 80 },
            { name: "MySQL", level: 75 },
            { name: "Node.js", level: 65 },
            { name: "Express.js", level: 65 }
        ],
        Programming: [
            { name: "Java", level: 80 },
            { name: "Python", level: 70 },
            { name: "C++", level: 60 },
            { name: "C", level: 60 }
        ],
        Testing: [
            { name: "Postman", level: 80 },
            { name: "ThunderClient", level: 75 },
            { name: "Vercel", level: 65 },
            { name: "Netlify", level: 65 }
        ],
        design: [
            { name: "Figma", level: 90 },
            { name: "Canva", level: 85 },
            { name: "AdobXd", level: 65 },
            { name: "Photoshop", level: 60 }, 
        ],
        other: [
            { name: "Git & Github", level: 85 },
            { name: "Type Writing", level: 80 },
            { name: "Communication", level: 85 }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('frontend');

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
                                    <div>
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
                                    >
                                        {skill.level}%
                                    </div>
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

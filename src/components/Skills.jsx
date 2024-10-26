import React, { useState } from 'react';
import '../Styles/skills.css';
import Home1 from '../pages/Home1';

const Skills = () => {
    const skillsData = {
        frontend: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "React", level: 75 },
            { name: "Tailwind", level: 70 }
        ],
        backend: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 70 },
            { name: "MySQL", level: 65 }
        ],
        design: [
            { name: "Figma", level: 85 },
            { name: "Photoshop", level: 70 },
            { name: "Canva", level: 80 }
        ],
        other: [
            { name: "Git", level: 75 },
            { name: "Agile Methodology", level: 80 },
            { name: "Communication", level: 85 }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('frontend');

    return (
        <div className="skills-section">
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

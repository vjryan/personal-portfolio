import React from 'react';

const Skill = ({skills}) => {

    console.log(skills);

    let backend = skills.backend.join(', ');

    return(
        <div className="skills_container">
            <h1>Skills.</h1>
            <div className="skill_summary_container">
                <h2>Backend</h2>
                <p>{skills.backend.join(', ')}</p>

                <h2>Frontend</h2>
                <p>{skills.frontend.join(', ')}</p>

                <h2>Tools</h2>
                <p>{skills.tools.join(', ')}</p>
            </div>
        </div>
    );
}

export default Skill;
import React from 'react';

const Experience = ({experience}) => {

    console.log(experience);
    return (
        <div className="experience_container">
            <h1>Experience.</h1>
            <div className="job_container">
                {experience.map( (item, index)=>(
                    <div key={index} className="job">
                        <h2>{item.position}</h2>
                        <a href={item.website}>{item.company}</a>
                        <div className="location_range">
                            <span>{item.location}</span>
                            <br/><br/>
                            <span>
                                {item.start_date} - { item.end_date === null ? 'Present' : item.end_date}
                            </span>
                        </div>
                        <div className="summary">
                            {item.summary}
                        </div>
                        <div className="bullets">
                            <ul>
                                {item.bullets.map((bullet) =>(
                                    <li>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = ({experience}) => {

    console.log(experience);
    return (
        <div className="experience_container container">
            <h1>Experience.</h1>
            <div className="job_container">
                {experience.map( (item, index)=>(
                    <div key={index} className="job">
                        <h2>{item.position}</h2>
                        <a href={item.website}>{item.company}</a>
                        <div className="location_range">
                            <span>
                            <FaMapMarkerAlt></FaMapMarkerAlt> {item.location}
                            </span>
                    
                            <span>
                                <FaCalendarAlt></FaCalendarAlt> {item.start_date} - { item.end_date === null ? 'Present' : item.end_date}
                            </span>
                        </div>
                        <div className="summary">
                            {item.summary}
                        </div>
                        <div className="bullets">
                            <ul>
                                {item.bullets.map((bullet, index) =>(
                                    <li key={index}>{bullet}</li>
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
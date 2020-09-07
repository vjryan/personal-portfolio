import React from 'react';
import Header  from './header';
import Contact from './Contact';
import data    from './yourdata';

const Project = () =>{
    return(
        <div>
        <Header name={data.name} contactEmail={data.contactEmail}></Header>
        <div className="work_container">
            <h1>Past Projects.</h1>
            <div className="projects_container">
                {data.projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url}>
                            <img src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Project;
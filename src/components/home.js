import React from 'react';

const Home = ({name, paragraph, authorImage})=>{

    return(
    <div>
        <div className="home_container container">
            <div className="home_head_wrapper">
            <h1> Oh Hi! I'm <span>{name}</span></h1>
            <p>{paragraph}</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Author"></img>
                <div className="bg"></div>
            </div>
        </div>
    </div>
    )
}

export default Home;
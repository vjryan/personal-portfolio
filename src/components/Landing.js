import React from 'react';
import Header from './header'
import Home from './home';
import Experience from './Experience';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Social from './Social';

import data from './yourdata';

const Landing = ()=>{
    return(
    <div className="App">
      <Header name={data.name} contactEmail = {data.contactEmail}></Header>
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage}></Home>
      <Experience experience={data.experience}></Experience>
      <Skill skills={data.skills}></Skill>
      {/* <Project projects={data.projects}></Project> */}
      {/* <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact> */}
      <Social email = {data.contactEmail} social={data.social}></Social>
    </div>
    )
}

export default Landing
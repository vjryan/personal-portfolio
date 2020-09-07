import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{

    return (
      <div className="contact_container container">
        <h1>Get in touch.</h1>
        <p>
          {contactPara}
          <br/>Email me at:
          <a className="email_link" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          </p>
        <br></br>
        
        <div className="social_links">
          <ul>
            <li >
            <span>Find Me On:</span>
            </li>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact
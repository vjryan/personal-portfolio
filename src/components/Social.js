import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
const Social = ({social, email}) => {
    return (
        <div className="contact_container">
            <div className="social_links">
            <ul id="social">
                <li>
                <a href={`mailto:${email}`}>
                    <FaEnvelope></FaEnvelope>
                </a>
                </li>
                <li>
                <a href={social[0].url}>
                    <FaLinkedin></FaLinkedin>
                </a>
                </li>
                <li>
                <a href={social[1].url}>
                    <FaGithub></FaGithub>
                </a>
                </li>
                <li>
                <a href={social[2].url}>
                    <FaCodepen></FaCodepen>
                </a>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Social;
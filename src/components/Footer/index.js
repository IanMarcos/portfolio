import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3>Links:</h3>
        <ul>
          <li>
            <a href="https://github.com/IanMarcos" target="_blank" rel="noreferrer">
              <BsGithub size={35}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ian-m-ortiz" target="_blank" rel="noreferrer">
              <BsLinkedin size={35}/>
            </a>
          </li>
        </ul>
      </div>
      <p>Colombia. {new Date().getFullYear()}</p>
    </footer>
  )
}
export default Footer;

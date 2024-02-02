import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import globalStrings from 'assets/strings/global.json';
import strings from 'assets/strings/en.json';
import 'assets/styles/components/AboutSection.scss';
import 'assets/styles/common/classes.scss';

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2>{strings.aboutTitle}</h2>
      <div className="about-content">
        <div className="contact-info">
          <div>
            <h3>{strings.contactMeTitle}</h3>
            <address>{globalStrings.email}</address>
          </div>
          <div>
            <h3>{strings.socialLinksTitle}</h3>
            <ul>
              <li>
                <a
                  href={globalStrings.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <BsLinkedin size={35} />
                  <span className="hidden">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={globalStrings.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <BsGithub size={35} />
                  <span className="hidden">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-me">
          <p>{strings.aboutParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

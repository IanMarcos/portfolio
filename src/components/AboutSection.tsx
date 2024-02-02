import React from 'react';
import SocialLinksList from './SocialLinksList';
import globalStrings from 'assets/strings/global.json';
import strings from 'assets/strings/en.json';
import 'assets/styles/components/AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>{strings.aboutTitle}</h2>
      <div className="about-content">
        <div className="contact-info">
          <div>
            <h3>{strings.contactMeTitle}</h3>
            <address>{globalStrings.email}</address>
          </div>
          <div>
            <h3>{strings.socialLinksTitle}</h3>
            <SocialLinksList />
          </div>
        </div>
        <div className="about-me">
          <p>{strings.aboutParagraph}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
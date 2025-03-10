import React from 'react';
import SocialLinksList from './SocialLinksList';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import 'styles/components/AboutSection.scss';

const AboutSection = () => {
  const { strings } = useMultiLanguage();

  return (
    <section className="about-section">
      <h2>{strings.aboutTitle}</h2>
      <div className="about-content">
        <div className="contact-info">
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

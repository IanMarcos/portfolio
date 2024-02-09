import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import globalStrings from 'assets/strings/global.json';
import 'styles/common/classes.scss';
import 'styles/components/SocialLinksList.scss';

const enum SOCIAL_MEDIAS {
  LINKEDIN = 'LinkedIn',
  GITHUB = 'Github',
}

const SocialLinksList = () => {
  return (
    <ul className="socials-list">
      <li>
        <a
          href={globalStrings.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          title={SOCIAL_MEDIAS.LINKEDIN}
        >
          <BsLinkedin size={35} />
          <span className="hidden">{SOCIAL_MEDIAS.LINKEDIN}</span>
        </a>
      </li>
      <li>
        <a
          href={globalStrings.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title={SOCIAL_MEDIAS.GITHUB}
        >
          <BsGithub size={35} />
          <span className="hidden">{SOCIAL_MEDIAS.GITHUB}</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinksList;

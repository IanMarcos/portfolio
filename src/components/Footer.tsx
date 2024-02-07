import React from 'react';
import { SiGatsby, SiReact, SiSass, SiTypescript } from 'react-icons/si';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import 'assets/styles/common/classes.scss';
import 'assets/styles/components/Footer.scss';

const ICON_SIZE = 28;
const enum Stack {
  Gatsby = 'Gatsby',
  React = 'React',
  Typescript = 'Typescript',
  Sass = 'Sass',
}

const Footer = () => {
  const { strings } = useMultiLanguage();

  return (
    <footer className="mainpage-footer">
      <span className="done-with">{strings.footerStack}</span>
      <ul>
        <li title={Stack.Gatsby}>
          <span className="hidden">{Stack.Gatsby}</span>
          <SiGatsby size={ICON_SIZE} />
        </li>
        <li title={Stack.React}>
          <span className="hidden">{Stack.React}</span>
          <SiReact size={ICON_SIZE} />
        </li>
        <li title={Stack.Typescript}>
          <span className="hidden">{Stack.Typescript}</span>
          <SiTypescript size={ICON_SIZE} />
        </li>
        <li title={Stack.Sass}>
          <span className="hidden">{Stack.Sass}</span>
          <SiSass size={ICON_SIZE} />
        </li>
      </ul>
      <span className="last-update">
        {strings.footerLastUpdated} {strings.footerLastUpdateDate}
      </span>
    </footer>
  );
};

export default Footer;

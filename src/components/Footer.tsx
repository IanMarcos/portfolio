import React from 'react';
import { SiGatsby, SiReact, SiSass, SiTypescript } from 'react-icons/si';
import strings from 'assets/strings/en.json';
import 'assets/styles/common/classes.scss';
import 'assets/styles/components/Footer.scss';

const ICON_SIZE = 28;
const enum STACK {
  GATSBY = 'Gatsby',
  REACT = 'React',
  TYPESCRIPT = 'Typescript',
  SASS = 'Sass',
}

const Footer = () => {
  return (
    <footer className="mainpage-footer">
      <span>{strings.footerStack}</span>
      <ul>
        <li title={STACK.GATSBY}>
          <span className="hidden">{STACK.GATSBY}</span>
          <SiGatsby size={ICON_SIZE} />
        </li>
        <li title={STACK.REACT}>
          <span className="hidden">{STACK.REACT}</span>
          <SiReact size={ICON_SIZE} />
        </li>
        <li title={STACK.TYPESCRIPT}>
          <span className="hidden">{STACK.TYPESCRIPT}</span>
          <SiTypescript size={ICON_SIZE} />
        </li>
        <li title={STACK.SASS}>
          <span className="hidden">{STACK.SASS}</span>
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

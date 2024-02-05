import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import 'assets/styles/common/classes.scss';
import 'assets/styles/components/LanguageMenu.scss';

const LanguageMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const { strings } = useMultiLanguage();

  const toogleMenu = () => {
    setIsFirstTime(false);
    setIsMenuVisible(!isMenuVisible);
  };

  const getMenuClasses = () => {
    let classes = 'language-menu';
    if (isMenuVisible && !isFirstTime) {
      classes += ' show-language-menu';
    } else if (!isMenuVisible && !isFirstTime) {
      classes += ' hide-language-menu';
    }

    return classes;
  };

  return (
    <>
      <button
        className="floating-menu-btn"
        title={strings.floatingMenuButton}
        onClick={toogleMenu}
      >
        <TiThMenu size={30} />
        <span className="hidden">{strings.floatingMenuButton}</span>
      </button>
      <div className={getMenuClasses()} onClick={toogleMenu}>
        <span>{strings.selectLanguage}</span>
        <ul>
          <li>
            <button>{strings.lanEnglish}</button>
          </li>
          <li>
            <button>{strings.lanSpanish}</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageMenu;

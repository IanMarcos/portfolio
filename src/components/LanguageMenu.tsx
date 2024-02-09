import React, { MouseEvent, useState } from 'react';
import { PiTranslateBold } from 'react-icons/pi';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import { Languages } from '../types/MultiLanguageStrings';
import { isStringInStringEnum } from '../utils/strings';
import 'styles/common/classes.scss';
import 'styles/components/LanguageMenu.scss';

const LanguageMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const { strings, setLanguage } = useMultiLanguage();

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

  const handleLanguageSelect = ($event: MouseEvent<HTMLButtonElement>) => {
    if (!($event.target instanceof HTMLButtonElement)) {
      return;
    }
    const selectedLang = $event.target.dataset.lang;
    if (!selectedLang || !isStringInStringEnum(selectedLang, Languages)) {
      return;
    }

    setLanguage(selectedLang as Languages);
    localStorage.setItem('language', selectedLang);
  };

  return (
    <>
      <button
        className="floating-menu-btn"
        title={strings.floatingMenuButton}
        onClick={toogleMenu}
      >
        <PiTranslateBold size={30} />
        <span className="hidden">{strings.floatingMenuButton}</span>
      </button>
      <div className={getMenuClasses()} onClick={toogleMenu}>
        <span>{strings.selectLanguage}</span>
        <ul>
          <li>
            <button
              data-lang={Languages.English}
              onClick={handleLanguageSelect}
            >
              {strings.lanEnglish}
            </button>
          </li>
          <li>
            <button
              data-lang={Languages.Spanish}
              onClick={handleLanguageSelect}
            >
              {strings.lanSpanish}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageMenu;

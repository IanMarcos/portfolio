import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Languages } from '../types/MultiLanguageStrings';
import { isStringInStringEnum } from '../utils/strings';

type LanguagesUnion = `${Languages}`; // 'en'|'es'|...
type LanguageContext = {
  language: LanguagesUnion;
  setLanguage: React.Dispatch<React.SetStateAction<LanguagesUnion>>;
};

const LanguageContext = createContext<LanguageContext | null>(null);

const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  let defaultValue;
  const localStorageLanguage = localStorage.getItem('language');

  if (
    localStorageLanguage &&
    isStringInStringEnum(localStorageLanguage, Languages)
  ) {
    defaultValue = localStorageLanguage as Languages;
  } else {
    defaultValue = Languages.English;
  }
  const [language, setLanguage] = useState<LanguagesUnion>(defaultValue);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguageContext must be used within a LanguageContext.Provider',
    );
  }
  return context;
};

export default LanguageContextProvider;

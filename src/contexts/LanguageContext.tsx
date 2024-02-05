import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Languages } from '../types/MultiLanguageStrings';

type LanguagesUnion = `${Languages}`; // 'en'|'es'|...
type LanguageContext = {
  language: LanguagesUnion;
  setLanguage: React.Dispatch<React.SetStateAction<LanguagesUnion>>;
};

const LanguageContext = createContext<LanguageContext | null>(null);

const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguagesUnion>(Languages.English);

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

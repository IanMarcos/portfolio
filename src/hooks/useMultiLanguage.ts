import { useEffect, useState } from 'react';
import { MultiLanguageStrings } from '../types/MultiLanguageStrings';
import defaultStrings from 'assets/strings/en.json';

export const enum LANGUAGES {
  EN = 'en',
  ES = 'es',
}

export function useMultiLanguage() {
  const [activeLanguage, setActiveLanguage] = useState(LANGUAGES.EN);
  const [strings, setStrings] = useState<MultiLanguageStrings>(defaultStrings);
  const [projects, setProjects] = useState([]);

  const fetchStrings = () => {
    import(`assets/strings/${activeLanguage}`).then((strings) => {
      setStrings(strings);
    });
    import(`assets/data/projects/${activeLanguage}`).then((projects) => {
      setProjects(projects);
    });
  };

  useEffect(fetchStrings, [activeLanguage]);

  return { strings, projects, setActiveLanguage };
}

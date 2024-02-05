import { useEffect, useState } from 'react';
import { useLanguageContext } from '../contexts/LanguageContext';
import { MultiLanguageStrings } from '../types/MultiLanguageStrings';
import defaultStrings from 'assets/strings/en.json';

export function useMultiLanguage() {
  const { language, setLanguage } = useLanguageContext();
  const [strings, setStrings] = useState<MultiLanguageStrings>(defaultStrings);
  const [projects, setProjects] = useState([]);

  const fetchStrings = () => {
    import(`assets/strings/${language}.json`).then((strings) => {
      setStrings(strings);
    });
    import(`assets/data/projects/${language}.json`).then((projects) => {
      setProjects(projects);
    });
  };

  useEffect(fetchStrings, [language]);

  return { strings, projects, setLanguage };
}

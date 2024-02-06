import { useEffect, useState } from 'react';
import { useLanguageContext } from '../contexts/LanguageContext';
import { MultiLanguageStrings } from '../types/MultiLanguageStrings';
import { Project } from '../types/Project';
import defaultStrings from 'assets/strings/en.json';
import defaultProjectsJSON from 'assets/data/projects/en.json';

const { projects: defaultProjects } = defaultProjectsJSON;

export function useMultiLanguage() {
  const { language, setLanguage } = useLanguageContext();
  const [strings, setStrings] = useState<MultiLanguageStrings>(defaultStrings);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  const fetchStrings = () => {
    import(`assets/strings/${language}.json`).then((strings) => {
      setStrings(strings);
    });
    import(`assets/data/projects/${language}.json`).then((projectsJson) => {
      const { projects } = projectsJson;
      setProjects(projects);
    });
  };

  useEffect(fetchStrings, [language]);

  return { strings, projects, setLanguage };
}

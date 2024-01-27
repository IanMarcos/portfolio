export type ProjectCategory = 'Frontend' | 'Backend' | 'Fullstack';

export type Project = {
  name: string;
  category: ProjectCategory;
  description?: string;
  linkToFront?: string;
  linkToBack?: string;
  image: string | undefined;
  imageAlt: string;
};

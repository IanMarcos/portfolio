export const enum CODE_CATEGORIES {
  FULLSTACK = 'Fullstack',
  BACKEND = 'Backend',
  FRONTEND = 'Frontend',
}

type ProjectCategory = `${CODE_CATEGORIES}`;

export type Project = {
  name: string;
  category: ProjectCategory;
  description?: string;
  linkToFront?: string;
  linkToBack?: string;
  image: string | undefined;
  imageAlt: string;
};

export const enum CodeCategories {
  Full = 'Fullstack',
  Be = 'Backend',
  Fe = 'Frontend',
}

type ProjectCategory = `${CodeCategories}`;

export type Project = {
  name: string;
  category: ProjectCategory;
  description?: string;
  linkToFront?: string;
  linkToBack?: string;
  image: string | undefined;
  imageAlt: string;
};

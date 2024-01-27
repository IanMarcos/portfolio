import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainHeader from 'components/MainHeader';
import ProjectsSection from 'components/ProjectsSection';
import 'assets/styles/global-styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MainHeader />
      <ProjectsSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ian's portfolio</title>;

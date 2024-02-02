import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainHeader from '../components/MainHeader';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import 'assets/styles/common/global-styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MainHeader />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ian's portfolio</title>;

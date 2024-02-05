import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import LanguageMenu from '../components/LanguageMenu';
import MainHeader from '../components/MainHeader';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import 'assets/styles/common/global-styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <LanguageMenu />
      <main>
        <MainHeader />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ian's portfolio</title>;

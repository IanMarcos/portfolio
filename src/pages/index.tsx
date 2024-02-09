import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import LanguageMenu from '../components/LanguageMenu';
import MainHeader from '../components/MainHeader';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import LanguageContextProvider from '../contexts/LanguageContext';
import 'styles/common/global-styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LanguageContextProvider>
      <LanguageMenu />
      <main>
        <MainHeader />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </LanguageContextProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ian's portfolio</title>;

import React from 'react';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import globalStrings from 'assets/strings/global.json';
import 'assets/styles/components/MainHeader.scss';

const MainHeader = () => {
  const { strings } = useMultiLanguage();

  return (
    <>
      <div className="main-header-container">
        <h1>{globalStrings.fullName}</h1>
        <div className="short-words">
          <p>
            <span>&lt;</span>
            {strings.headerWebDev}
            <span> /&gt;</span>
          </p>
          <p>
            <span>&lt;</span>
            {strings.headerSoftEngi}
            <span> /&gt;</span>
          </p>
        </div>
      </div>
      <div className="summary">
        <p>{strings.summaryOfMyself}</p>
      </div>
    </>
  );
};

export default MainHeader;

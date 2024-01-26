import React from 'react';
import globalStrings from 'assets/strings/global.json';
import strings from 'assets/strings/en.json';
import 'assets/styles/MainHeader.scss';

const MainHeader = () => {
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

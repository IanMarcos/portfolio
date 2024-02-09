import React from 'react';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import globalStrings from 'assets/strings/global.json';
import { LeftDiagonal, RigthDiagonal } from './UI/Diagonals';
import 'assets/styles/components/MainHeader.scss';

const MainHeader = () => {
  const { strings } = useMultiLanguage();

  return (
    <>
      <div className="hero">
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
        <LeftDiagonal className="diagonal-4-white" />
      </div>
      <div className="summary">
        <p>{strings.summaryOfMyself}</p>
        <RigthDiagonal className="diagonal-4-dblue" />
      </div>
    </>
  );
};

export default MainHeader;

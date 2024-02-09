import React from 'react';

export const LeftDiagonal = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polygon points="0,0 0,100 100,100" />
    </svg>
  );
};

export const RigthDiagonal = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polygon points="0,100 100,0 100,100" />
    </svg>
  );
};

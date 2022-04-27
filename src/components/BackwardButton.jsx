import React from 'react';

const BackwardButton = ({ children }) => {
  return (
    <button type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <p>{children}</p>
    </button>
  );
};

export default BackwardButton;

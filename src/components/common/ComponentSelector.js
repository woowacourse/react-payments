import React from 'react';

export const ComponentSelector = ({ children, selected }) => {
  const selectedComponent = Array.isArray(children)
    ? children[selected]
    : children;
  return <>{selectedComponent}</>;
};

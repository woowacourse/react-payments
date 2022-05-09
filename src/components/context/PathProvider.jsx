import React, { useState } from 'react';

const PathContext = React.createContext(null);
const SetPathContext = React.createContext(null);

const PathProvider = ({ children }) => {
  const [path, setPath] = useState('list-card');

  return (
    <PathContext.Provider value={path}>
      <SetPathContext.Provider value={setPath}>{children}</SetPathContext.Provider>
    </PathContext.Provider>
  );
};

export { PathContext, SetPathContext, PathProvider };

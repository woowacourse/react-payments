import React, { useState } from "react";

interface PathProviderProps {
  children: React.ReactNode;
}

const PathContext = React.createContext<string | null>(null);
const SetPathContext = React.createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);

const PathProvider = ({ children }: PathProviderProps) => {
  const [path, setPath] = useState("list-card");

  return (
    <PathContext.Provider value={path}>
      <SetPathContext.Provider value={setPath}>
        {children}
      </SetPathContext.Provider>
    </PathContext.Provider>
  );
};

export { PathContext, SetPathContext, PathProvider };

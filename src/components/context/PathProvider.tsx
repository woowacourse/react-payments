import React, { useState } from "react";
import { Route } from "types";

interface PathProviderProps {
  children: React.ReactNode;
}

const PathContext = React.createContext<Route | null>(null);
const SetPathContext = React.createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);

const PathProvider = ({ children }: PathProviderProps) => {
  const [path, setPath] = useState<Route>("list-card");

  return (
    <PathContext.Provider value={path}>
      <SetPathContext.Provider value={setPath}>
        {children}
      </SetPathContext.Provider>
    </PathContext.Provider>
  );
};

export { PathContext, SetPathContext, PathProvider };

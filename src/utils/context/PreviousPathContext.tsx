import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

interface PreviousPathContextProps {
  previousPath?: string;
}

const PreviousPathContext = createContext<PreviousPathContextProps>({
  previousPath: '',
});

export const PreviousPathProvider = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState('');

  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location]);

  const value = { previousPath };

  return (
    <PreviousPathContext.Provider value={value}>
      {children}
    </PreviousPathContext.Provider>
  );
};

export const usePreviousPath = () => {
  const context = useContext(PreviousPathContext);

  if (context === undefined) {
    throw new Error(
      'usePreviousPath must be used within a PreviousPathProvider',
    );
  }

  return context;
};

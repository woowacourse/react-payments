import React, { createContext, useEffect, useState } from "react";

interface InitialContextValue {
  error: null | Error;
  setError: React.Dispatch<React.SetStateAction<null | Error>>;
}

export const ErrorContext = createContext<InitialContextValue | null>(null);

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;

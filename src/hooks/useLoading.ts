import { useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingOn = () => {
    setIsLoading(true);
  };

  const handleLoadingOff = () => {
    setIsLoading(false);
  };

  return { isLoading, handleLoadingOn, handleLoadingOff };
};

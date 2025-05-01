import { useRef } from 'react';

export const useExpirationRef = () => {
  const expirationRefs = {
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null)
  };

  return expirationRefs;
};

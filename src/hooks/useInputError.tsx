import React, { useState } from 'react';

export const useInputError = (): [boolean, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setIsError(false);
      return;
    }

    setIsError(true);
  };

  return [isError, handleInputChange];
};

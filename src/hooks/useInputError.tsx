import React, { useState } from 'react';

export const useInputError = (): [boolean, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isInvalid = !e.target.validity.valid;
    setIsError(isInvalid);
  };

  return [isError, handleInputChange];
};

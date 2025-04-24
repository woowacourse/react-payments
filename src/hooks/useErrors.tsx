import {useState} from 'react';

const useErrors = (initialData) => {
  const [isErrors, setIsErrors] = useState(initialData);

  const onError = (name: string, isError: boolean) => {
    setIsErrors((prev) => ({...prev, [name]: isError}));
  };

  return {isErrors, onError};
};

export default useErrors;

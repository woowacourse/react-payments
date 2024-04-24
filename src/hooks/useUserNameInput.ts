import { useState } from 'react';

import INPUT_REGEX from '../constants/regex';

function useUserNameInput() {
  const [userName, setUserName] = useState('');

  const handleNameChange = (value: string) => {
    setUserName(value.toUpperCase());
  };

  const nameError = !INPUT_REGEX.userName.test(userName);
  return { userName, nameError, handleNameChange };
}

export default useUserNameInput;

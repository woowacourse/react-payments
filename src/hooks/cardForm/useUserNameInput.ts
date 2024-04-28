import { useState } from 'react';

import INPUT_REGEX from '../../constants/regex';

function useUserNameInput() {
  const [userName, setUserName] = useState('');
  const [isUserNameFilled, setIsUserNameFilled] = useState(false);

  const handleNameChange = (value: string) => {
    const upperCaseValue = value.toUpperCase();
    setUserName(upperCaseValue);
  };

  const handleNameInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter' && userName !== '' && !isUserNameFilled) {
      setIsUserNameFilled(true);
    }
  };

  const nameError = !INPUT_REGEX.userName.test(userName);

  return {
    userName,
    nameError,
    isUserNameFilled,
    handleNameChange,
    handleNameInputEnter,
  };
}

export default useUserNameInput;

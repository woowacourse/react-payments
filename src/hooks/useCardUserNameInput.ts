import { useState } from 'react';

function useCardUserNameInput() {
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (value: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    const isValidName = regex.test(value);

    if (!isValidName) {
      return setNameError(!isValidName);
    }

    setUserName(value.toUpperCase());
  };

  return { userName, nameError, handleNameChange };
}

export default useCardUserNameInput;

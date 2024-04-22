import { useState } from 'react';

function useUserNameInput() {
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (value: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    const isValidName = regex.test(value);

    setNameError(!isValidName);

    if (!isValidName) return;

    setUserName(value.toUpperCase());
  };

  return { userName, nameError, handleNameChange };
}

export default useUserNameInput;

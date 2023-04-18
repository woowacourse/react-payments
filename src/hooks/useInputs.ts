import { ChangeEvent, useState } from 'react';

export const useInput = (validator: (input: string) => boolean) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (!validator(e.target.value)) {
      setErrorMsg('입력값이 유효하지 않습니다.');
      return;
    }
    setErrorMsg('');
  };

  return { inputValue, errorMsg, handleInputChange };
};

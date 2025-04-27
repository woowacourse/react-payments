import { useRef, useState } from 'react';
import { isNumber } from '../utils/isNumber';
import { INITIAL_PASSWORD } from '../constants';

const usePassword = () => {
  const [password, setPassword] = useState(INITIAL_PASSWORD);

  const handlePasswordChange = (value: string) => {
    if (!isNumber(value) && value !== '') {
      return;
    }

    setPassword((prev) => ({
      ...prev,
      value
    }));
  };

  const passwordRef = useRef<HTMLInputElement>(null);
  return { password, handlePasswordChange, passwordRef };
};

export default usePassword;

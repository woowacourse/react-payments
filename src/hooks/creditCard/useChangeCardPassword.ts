import { isContainsNonNumeric } from '@utils/number/number';
import { useState } from 'react';

const useChangeCardPassword = () => {
  const [cardPassword, setCardPassword] = useState('');
  const [cardPasswordError, setCardPasswordError] = useState({ isError: false, errorMessage: '' });

  const handleChangePassword = (password: string) => {
    if (isContainsNonNumeric(password)) {
      setCardPasswordError({ isError: true, errorMessage: '숫자만 입력 가능합니다.' });
      return;
    }

    setCardPasswordError({ isError: false, errorMessage: '' });
    setCardPassword(password);
  };

  return { cardPassword, cardPasswordError, handleChangePassword };
};

export default useChangeCardPassword;

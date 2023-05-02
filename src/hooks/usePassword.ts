import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const usePassword = () => {
  const [cardPasswords, setCardPasswords] = useState<Array<string>>(['', '']);
  const [passwordError, setPasswordError] = useState<string>('');

  const handleCardPasswords = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) {
      setPasswordError('카드 비밀번호 앞 두 자리를 숫자로 입력해주세요.');
      return;
    }

    setPasswordError('');
    setCardPasswords({ ...cardPasswords, [order]: value });
  };

  return { cardPasswords, passwordError, handleCardPasswords };
};

export default usePassword;

import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';
import { CardPasswordType } from '../types/general';

const usePassword = () => {
  const [cardPasswords, setCardPasswords] = useState<CardPasswordType>({
    0: '',
    1: '',
  });
  const [passwordError, setPasswordError] = useState<string>('');

  const isValidatedCardPasswords = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) {
      setPasswordError('카드 비밀번호 앞 두 자리를 숫자로 입력해주세요.');
      return false;
    }

    setPasswordError('');
    setCardPasswords({ ...cardPasswords, [order]: value });
    return true;
  };

  return { cardPasswords, passwordError, isValidatedCardPasswords };
};

export default usePassword;

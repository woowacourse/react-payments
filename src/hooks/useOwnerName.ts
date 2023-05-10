import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useOwnerName = () => {
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [ownerNameError, setOwnerNameError] = useState<string>('');

  const isValidatedCardOwnerName = (value: string) => {
    if (value.length === 0) {
      setCardOwnerName('');
      return true;
    }

    if (REG_EXP.cardNameForm.test(value)) {
      setOwnerNameError(
        '카드 소유자명은 30자 이내의 대문자 영문으로만 입력해주세요.'
      );
      return false;
    }

    setOwnerNameError('');
    setCardOwnerName(value.toUpperCase());
    return true;
  };

  return { cardOwnerName, ownerNameError, isValidatedCardOwnerName };
};

export default useOwnerName;

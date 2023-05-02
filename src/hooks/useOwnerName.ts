import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useOwnerName = () => {
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [ownerNameError, setOwnerNameError] = useState<string>('');

  const handleCardOwnerName = (value: string) => {
    if (value.length === 0) setCardOwnerName('');

    if (REG_EXP.cardNameForm.test(value)) {
      setOwnerNameError(
        '카드 소유자명은 30자 이내의 대문자 영문으로만 입력해주세요.'
      );
      return;
    }

    setOwnerNameError('');
    setCardOwnerName(value);
  };

  return { cardOwnerName, ownerNameError, handleCardOwnerName };
};

export default useOwnerName;

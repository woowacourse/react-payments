import { useState, useEffect } from 'react';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';
import type { FormInputValueType } from '../../../types';

type CardOwnerNameProps = {
  updateCardOwnerName: (cardOwnerName: FormInputValueType) => void;
};

const CardOwnerName = ({ updateCardOwnerName }: CardOwnerNameProps) => {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const checkCardOwnerNameLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardOwnerName = event.target.value;

    setCardOwnerName(cardOwnerName);
  };

  useEffect(() => {
    updateCardOwnerName({ isValid: true, value: cardOwnerName });
  }, [cardOwnerName, updateCardOwnerName]);

  return (
    <LabeledInput title="카드 소유자 이름 (선택)" numberOfLetter={{ current: cardOwnerName.length, max: 30 }}>
      <Input
        width="100%"
        onChange={checkCardOwnerNameLength}
        maxLength={30}
        value={cardOwnerName}
        name="cardOwnerName"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </LabeledInput>
  );
};

export default CardOwnerName;

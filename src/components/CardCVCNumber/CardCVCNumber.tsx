import Title from '../common/Title/Title';
import Label from '../common/Label/Label';
import Input from '../common/Input/Input';
import Spacing from '../common/Spacing/Spacing';

import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '../../constants';
import { checkAllNumber } from '../../utils';

interface CardCVCNumberProps {
  cardCVCNumber: string;
  setCardCVCNumber: Dispatch<SetStateAction<string>>;
  cardCVCNumberErrorMessage: string;
  setCardCVCNumberErrorMessage: Dispatch<SetStateAction<string>>;
}

const checkValidCVCNumber = (value: string) => {
  if (value.length === 3) return true;
  return false;
};

export default function CardCVCNumber({
  cardCVCNumber,
  setCardCVCNumber,
  cardCVCNumberErrorMessage,
  setCardCVCNumberErrorMessage,
}: CardCVCNumberProps) {
  const handleInputChange = (value: string) => {
    if (!checkAllNumber(value)) return;

    setCardCVCNumber(value);

    if (checkValidCVCNumber(value)) {
      setCardCVCNumberErrorMessage('');
    } else {
      setCardCVCNumberErrorMessage(ERROR_MESSAGE.cardCVCNumber.length);
    }
  };

  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-cvc-number">CVC</Label>
      <Spacing size={8} />
      <div>
        <Input
          placeholder="123"
          maxLength={3}
          value={cardCVCNumber}
          onChange={(event) => handleInputChange(event.target.value)}
          isError={cardCVCNumberErrorMessage !== ''}
        />
      </div>
      <Spacing size={8} />
      <ErrorMessage>{cardCVCNumberErrorMessage}</ErrorMessage>
    </div>
  );
}

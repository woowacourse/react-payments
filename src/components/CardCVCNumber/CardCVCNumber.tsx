import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import { CardCVCNumberInputType } from '@/types';
import { checkAllNumber } from '@/utils/validation';
import { Dispatch, SetStateAction } from 'react';

interface CardCVCNumberProps {
  cardCVCNumber: CardCVCNumberInputType;
  setCardCVCNumber: Dispatch<SetStateAction<CardCVCNumberInputType>>;
  cardCVCNumberErrorMessage: CardCVCNumberInputType;
  setCardCVCNumberErrorMessage: Dispatch<SetStateAction<CardCVCNumberInputType>>;
  onFocus: () => void;
  onBlur: () => void;
}

export default function CardCVCNumber({
  cardCVCNumber,
  setCardCVCNumber,
  cardCVCNumberErrorMessage,
  setCardCVCNumberErrorMessage,
  onFocus,
  onBlur,
}: CardCVCNumberProps) {
  const handleInputChange = (value: string) => {
    if (!checkAllNumber(value)) {
      setCardCVCNumberErrorMessage(ERROR_MESSAGE.cardNumber.number);
      return;
    }

    setCardCVCNumber(value);

    if (value.length !== 3) {
      setCardCVCNumberErrorMessage(ERROR_MESSAGE.cardCVCNumber.length);
    } else {
      setCardCVCNumberErrorMessage('');
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
          onFocus={onFocus}
          onBlur={onBlur}
          isError={cardCVCNumberErrorMessage !== ''}
        />
      </div>
      <Spacing size={8} />
      <ErrorMessage>{cardCVCNumberErrorMessage}</ErrorMessage>
    </div>
  );
}

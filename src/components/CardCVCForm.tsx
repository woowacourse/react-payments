import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';
import NumberInput from './NumberInput';
import { ERROR_MESSAGE } from '../constants/guide';
import { NumberInputForm, Label, NumberInputContainer, ErrorText } from '../styles/CardForm.styles';

interface CardCVCFormProps {
  cardInfo: {
    cvc: string;
  };
  handleCardInfo: (key: keyof CardCVCFormProps['cardInfo'], value: string) => void;
  maxLength: number;
}

function CardCVCForm({ cardInfo, handleCardInfo, maxLength }: CardCVCFormProps) {
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (isZeroOrExactLength(cardInfo.cvc, maxLength)) {
      setErrorText('');
    } else {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    }
  }, [cardInfo.cvc]);

  return (
    <NumberInputForm>
      <Label>CVC</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.cvc}
          setValue={(value) => {
            handleCardInfo('cvc', value);
          }}
          maxLength={maxLength}
          placeholder="123"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardCVCForm;

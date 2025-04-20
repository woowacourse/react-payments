import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import NumberInput from '../common/NumberInput';
import { ERROR_MESSAGE } from '../../constants/guide';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';

interface CardCVCFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
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

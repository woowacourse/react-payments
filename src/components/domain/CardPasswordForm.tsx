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

interface CardPasswordProps {
  cardInfo: CardInfo;
  handleCardInfo: (field: keyof CardInfo, value: string) => void;
  maxLength: number;
}

function CardPasswordForm({ cardInfo, handleCardInfo, maxLength }: CardPasswordProps) {
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (isZeroOrExactLength(cardInfo.passwordFront, maxLength)) {
      setErrorText('');
    } else {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    }
  }, [cardInfo.passwordFront]);

  return (
    <NumberInputForm>
      <Label>비밀번호 앞 2자리</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.passwordFront}
          setValue={(value) => {
            handleCardInfo('passwordFront', value);
          }}
          maxLength={maxLength}
          placeholder="**"
          isHidden={true}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardPasswordForm;

import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './CardNumberInputBox.styled';
import { isNumeric } from '../../validator';
import { CardInfo, CardNumbers } from '../../types/state';

const CardNumberInputBox = ({
  cardNumbers,
  setCardInfo,
}: {
  cardNumbers: CardNumbers;
  setCardInfo: CallableFunction;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 4) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        cardNumbers: {
          ...cardNumbers,
          [name]: value,
        },
      };
    });
  };

  return (
    <styled.CardNumberInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(cardNumbers).map(([key, value]) => {
            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={onChange}
                width="xl"
                type="text"
                maxLength={4}
                placeholder="0000"
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;

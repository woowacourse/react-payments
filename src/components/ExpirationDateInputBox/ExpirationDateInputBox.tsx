import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './ExpirationDateInputBox.styled';
import { isNumeric } from '../../validator';
import { CardInfo, ExpirationDate } from '../../types/state';

const ExpirationDateInputBox = ({
  expirationDate,
  setCardInfo,
}: {
  expirationDate: ExpirationDate;
  setCardInfo: CallableFunction;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 2) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        expirationDate: {
          ...expirationDate,
          [name]: value,
        },
      };
    });
  };

  return (
    <styled.ExpirationDateInputBox>
      <label>
        <styled.LabelHeader>
          <span>만료일</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(expirationDate).map(([key, value]) => {
            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={onChange}
                width="s"
                type="text"
                maxLength={2}
                placeholder={key === 'month' ? 'MM' : 'YY'}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.ExpirationDateInputBox>
  );
};

export default ExpirationDateInputBox;

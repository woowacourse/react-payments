import { ChangeEvent, useState } from 'react';

import { Input } from '../../index';

import * as styled from './CardExpirationDateInput.styled';
import { CardInfo } from '../../../App';
import { isNumeric } from '../../../domain/validator';

const ExpirationDateInputBox = ({
  setCardInfo,
  expirationDate,
}: {
  setCardInfo: CallableFunction;
  expirationDate: any;
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
          {Object.keys(expirationDate).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                value={expirationDate[key]}
                onChange={onChange}
                width="s"
                type="text"
                maxLength={2}
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

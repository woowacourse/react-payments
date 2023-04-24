import { ChangeEvent, useState } from 'react';

import { CardInfo, ExpirationDate, SetCardInfo } from '../../types/state';
import { ERROR_MESSAGE } from '../../constants/message';

import { isNumeric } from '../../validator';

import * as styled from './ExpirationDateInputBox.styled';
import Input from '../Input/Input';

const ExpirationDateInputBox = ({
  expirationDate,
  setCardInfo,
}: {
  expirationDate: ExpirationDate;
  setCardInfo: SetCardInfo;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length === 1) {
      setCardInfo((prev: CardInfo) => {
        return {
          ...prev,
          expirationDate: {
            ...expirationDate,
            [name]: `0${value}`,
          },
        };
      });
    } else {
      setCardInfo((prev: CardInfo) => {
        return {
          ...prev,
          expirationDate: {
            ...expirationDate,
            [name]: value.substring(1),
          },
        };
      });
    }
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
                value={value ?? ''}
                onChange={onChange}
                width="s"
                type="text"
                maxLength={3}
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

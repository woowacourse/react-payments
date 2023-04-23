import { ChangeEvent, Fragment, useState } from 'react';

import { Input } from '../../';

import * as styled from './CardExpirationDateInput.styled';
import { CardInfo } from '../../../App';
import { isNumeric } from '../../../domain/validator';
import LabelHeader from '../LabelHeader';

interface ExpirationDateInputBoxProps {
  refs: any;
  setCardInfo: CallableFunction;
  expirationDate: any;
}

const ExpirationDateInputBox = ({
  refs,
  setCardInfo,
  expirationDate,
}: ExpirationDateInputBoxProps) => {
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
        <LabelHeader title="만료일" required={true} />
        <styled.InputContainer>
          <styled.Inputs>
            {Object.keys(expirationDate).map((key, index) => (
              <Fragment key={key}>
                <Input
                  name={key}
                  ref={refs[index]}
                  value={expirationDate[key]}
                  onChange={onChange}
                  type="text"
                  width="s"
                  center={true}
                  maxLength={2}
                  placeholder={index === 0 ? 'MM' : 'YY'}
                />
                {index === 0 && <styled.ExpirationDateDivision>/</styled.ExpirationDateDivision>}
              </Fragment>
            ))}
          </styled.Inputs>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.ExpirationDateInputBox>
  );
};

export default ExpirationDateInputBox;

import Input from './common/input/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './inputField/InputField';
import { CardNumberKey } from '../types/card';
import { ErrorDetail } from '../types/error';
import { useMemo } from 'react';
import { CARD_NUMBER_INDEXES, PASSWORD_INPUT_KEYS } from '../constants/card';
import styled from 'styled-components';

export interface CardNumbersContainerProps {
  cardNumbers: Record<CardNumberKey, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  errorInfo: Record<CardNumberKey, ErrorDetail>;
  handleBlur: (targetKey: CardNumberKey) => void;
  inputRefs: Record<CardNumberKey, React.RefObject<HTMLInputElement>>;
}

export default function CardNumberContainer({
  cardNumbers,
  handleChange,
  errorInfo,
  handleBlur,
  inputRefs,
}: CardNumbersContainerProps) {
  const getErrorMessage = useMemo(() => {
    const errorDetails = Object.values(errorInfo);
    const firstErrorElement = errorDetails.find(value => value.isError);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  }, [errorInfo]);

  return (
    <CardNumberContainerLayout>
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        {CARD_NUMBER_INDEXES.map((key, idx) => {
          const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

          return (
            <Input
              key={key}
              id={`${key}-card-numbers-input`}
              isError={errorInfo[key].isError}
              value={cardNumbers[key]}
              onChange={e => handleChange(e, key)}
              onBlur={() => handleBlur(key)}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
              ref={inputRefs[key]}
              autoFocus={idx === 0 && true}
            />
          );
        })}
      </InputField>
      <ErrorWrapper>
        <ErrorText>{getErrorMessage}</ErrorText>
      </ErrorWrapper>
    </CardNumberContainerLayout>
  );
}

const CardNumberContainerLayout = styled.div`
  margin-bottom: 80px;
`;

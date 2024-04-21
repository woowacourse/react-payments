import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './common/InputField';
import { CardNumberKey } from './types/card';
import { ErrorDetail } from './types/error';
import { useMemo } from 'react';
import { CARD_NUMBER_INDEXES, PASSWORD_INPUT_KEYS } from '../constants/card';

export interface CardNumbersContainerProps {
  cardNumbers: Record<CardNumberKey, string>;
  generateChangeHandler: (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorInfo: Record<CardNumberKey, ErrorDetail>;
  generateErrorMessageUpdater: (targetKey: CardNumberKey) => () => void;
}

export default function CardNumberContainer({
  cardNumbers,
  generateChangeHandler,
  errorInfo,
  generateErrorMessageUpdater,
}: CardNumbersContainerProps) {
  const getErrorMessage = useMemo(() => {
    const errorDetails = Object.values(errorInfo);
    const firstErrorElement = errorDetails.find(value => value.isError);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  }, [errorInfo]);

  return (
    <div>
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        {CARD_NUMBER_INDEXES.map(key => {
          const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

          return (
            <Input
              key={key}
              id={`${key}-card-numbers-input`}
              isError={errorInfo[key].isError}
              value={cardNumbers[key]}
              onChange={generateChangeHandler(key)}
              onBlur={generateErrorMessageUpdater(key)}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </InputField>
      <ErrorWrapper>
        <ErrorText>{getErrorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}

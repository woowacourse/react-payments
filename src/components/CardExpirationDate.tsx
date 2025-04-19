import * as S from './CardExpirationDate.styles';
import Title from './common/Title';
import Label from './common/Label';
import Input from './common/Input';
import Spacing from './common/Spacing';
import ErrorMessage from './common/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '../constants';
import { getFirstErrorMessage } from '../utils';

interface CardExpirationDateProps {
  cardExpirationDate: Record<DateType, string>;
  setCardExpirationDate: Dispatch<SetStateAction<Record<DateType, string>>>;
  cardExpirationDateErrorMessage: Record<DateType, string>;
  setCardExpirationDateErrorMessage: Dispatch<SetStateAction<Record<DateType, string>>>;
}

export type DateType = 'month' | 'year';

interface HandleInputChangeProps {
  dateType: DateType;
  value: string;
}

export default function CardExpirationDate({
  cardExpirationDate,
  setCardExpirationDate,
  cardExpirationDateErrorMessage,
  setCardExpirationDateErrorMessage,
}: CardExpirationDateProps) {
  const CardExpirationDateInputTypes: DateType[] = ['month', 'year'];

  const handleInputChange = ({ value, dateType }: HandleInputChangeProps) => {
    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value });
    setCardExpirationDateErrorMessage({
      ...cardExpirationDateErrorMessage,
      [dateType]: '',
    });

    if (!/^[0-9]*$/.test(value)) {
      setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.onlyNumber });
      return;
    }

    const valueAsNumber = parseInt(value, 10);

    if (dateType === 'month') {
      if (valueAsNumber < 0 || valueAsNumber > 12 || value === '00') {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.validMonth });
      }

      if (
        Number(cardExpirationDate.year) === Number(String(new Date().getFullYear()).slice(2)) &&
        valueAsNumber < new Date().getMonth() + 1
      ) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }
    }

    if (dateType === 'year') {
      if (valueAsNumber < Number(String(new Date().getFullYear()).slice(2))) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }

      if (
        valueAsNumber === Number(String(new Date().getFullYear()).slice(2)) &&
        Number(cardExpirationDate.month) < new Date().getMonth() + 1
      ) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }
    }
  };

  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-expiration-date">유효기간</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        {CardExpirationDateInputTypes.map((dateType, index) => (
          <Input
            key={index}
            type="text"
            placeholder={dateType === 'month' ? 'MM' : 'YY'}
            maxLength={2}
            id={index === 0 ? 'card-expiration-date' : undefined}
            value={cardExpirationDate[dateType]}
            onChange={(event) =>
              handleInputChange({
                value: event.target.value,
                dateType,
              })
            }
            isError={cardExpirationDateErrorMessage[dateType] !== ''}
          />
        ))}
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getFirstErrorMessage(cardExpirationDateErrorMessage)}</ErrorMessage>
    </div>
  );
}

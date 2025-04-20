import { Title, Label, Input, Spacing, ErrorMessage } from '@/components/common';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '@/constants';
import { DateType } from '@/types';
import * as S from './CardExpirationDate.styles';
import { checkValidMonth, checkValidYear } from './utils';
import { getErrorMessageFromObject } from '@/utils/message';
import { checkAllNumber } from '@/utils/validation';

interface CardExpirationDateProps {
  cardExpirationDate: Record<DateType, string>;
  setCardExpirationDate: Dispatch<SetStateAction<Record<DateType, string>>>;
  cardExpirationDateErrorMessage: Record<DateType, string>;
  setCardExpirationDateErrorMessage: Dispatch<SetStateAction<Record<DateType, string>>>;
}

interface HandleInputChangeParams {
  dateType: DateType;
  value: string;
}

export default function CardExpirationDate({
  cardExpirationDate,
  setCardExpirationDate,
  cardExpirationDateErrorMessage,
  setCardExpirationDateErrorMessage,
}: CardExpirationDateProps) {
  const handleInputChange = ({ value, dateType }: HandleInputChangeParams) => {
    if (!checkAllNumber(value)) return;

    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value });

    if (dateType === 'month') {
      if (checkValidMonth(value)) {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, month: '' });
      } else {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          month: ERROR_MESSAGE.cardExpirationDate.month,
        });
      }
    }

    if (dateType === 'year') {
      if (checkValidYear(value)) {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, year: '' });
      } else {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          year: ERROR_MESSAGE.cardExpirationDate.year,
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
        <Input
          placeholder="MM"
          maxLength={2}
          value={cardExpirationDate.month}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              dateType: 'month',
            })
          }
          isError={cardExpirationDateErrorMessage.month !== ''}
        />
        <Input
          placeholder="YY"
          maxLength={2}
          value={cardExpirationDate.year}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              dateType: 'year',
            })
          }
          isError={cardExpirationDateErrorMessage.year !== ''}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardExpirationDateErrorMessage)}</ErrorMessage>
    </div>
  );
}

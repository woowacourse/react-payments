import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '@/constants';
import { CardExpirationDateType } from '@/types';
import * as S from './CardExpirationDate.styles';
import { checkValidMonth, checkValidYear } from './utils';
import { getErrorMessageFromObject } from '@/utils/message';
import { checkAllNumber } from '@/utils/validation';
import { CardExpirationDateInputType } from '@/types';
interface CardExpirationDateProps {
  cardExpirationDate: CardExpirationDateInputType;
  setCardExpirationDate: Dispatch<SetStateAction<CardExpirationDateInputType>>;
  cardExpirationDateErrorMessage: CardExpirationDateInputType;
  setCardExpirationDateErrorMessage: Dispatch<SetStateAction<CardExpirationDateInputType>>;
}

interface HandleInputChangeParams {
  dateType: CardExpirationDateType;
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

    setCardExpirationDate((prev) => ({ ...prev, [dateType]: value }));

    if (dateType === 'month') {
      if (checkValidMonth(value)) {
        setCardExpirationDateErrorMessage((prev) => ({ ...prev, month: '' }));
        if (value.length === 2) {
          const nextInput = document.querySelector(`input[data-expiry="year"]`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
          }
        }
      } else {
        setCardExpirationDateErrorMessage((prev) => ({
          ...prev,
          month: ERROR_MESSAGE.cardExpirationDate.month,
        }));
      }
    }

    if (dateType === 'year') {
      if (checkValidYear(value)) {
        setCardExpirationDateErrorMessage((prev) => ({ ...prev, year: '' }));
      } else {
        setCardExpirationDateErrorMessage((prev) => ({
          ...prev,
          year: ERROR_MESSAGE.cardExpirationDate.year,
        }));
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
          data-expiry="month"
          inputMode="numeric"
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
          data-expiry="year"
          inputMode="numeric"
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardExpirationDateErrorMessage)}</ErrorMessage>
    </div>
  );
}

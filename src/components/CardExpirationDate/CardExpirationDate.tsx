import Title from '../common/Title/Title';
import Label from '../common/Label/Label';
import Input from '../common/Input/Input';
import Spacing from '../common/Spacing/Spacing';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '../../constants';
import { DateType } from '../../types';
import { checkAllNumber } from '../../utils';
import * as S from './CardExpirationDate.styles';

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
    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value });
    setCardExpirationDateErrorMessage({
      ...cardExpirationDateErrorMessage,
      [dateType]: '',
    });

    if (!checkAllNumber(value)) {
      setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.onlyNumber });
      return;
    }

    const valueAsNumber = parseInt(value, 10);

    if (dateType === 'month') validateMonth();

    function validateMonth() {
      if (valueAsNumber < 0 || valueAsNumber > 12 || value === '00') {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.validMonth });
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
      <ErrorMessage>
        {
          Object.entries(cardExpirationDateErrorMessage)
            .filter(([_, errorMassage]) => errorMassage !== '')
            .at(0)?.[1]
        }
      </ErrorMessage>
    </div>
  );
}

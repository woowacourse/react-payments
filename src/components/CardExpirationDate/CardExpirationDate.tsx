import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import * as S from './CardExpirationDate.styles';
import { getErrorMessageFromObject } from '@/utils/message';
import { checkAllNumber } from '@/utils/validation';
import { CardExpirationDateInputType } from '@/types';
import { RegisterType } from '@/hooks/useForm';

interface CardExpirationDateProps {
  register: RegisterType<CardExpirationDateInputType>;
  cardExpirationDateErrors: CardExpirationDateInputType;
}

export default function CardExpirationDate({ register, cardExpirationDateErrors }: CardExpirationDateProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkAllNumber(event.target.value)) return;

    if (event.target.value.length === 2 && event.target.dataset.expiry === 'month') {
      const nextInput = document.querySelector(`input[data-expiry="year"]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
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
          isError={cardExpirationDateErrors.month !== ''}
          data-expiry="month"
          inputMode="numeric"
          {...register('month', {
            onChange: handleInputChange,
            validation: {
              required: true,
              length: 2,
              errorMessage: ERROR_MESSAGE.cardExpirationDate.month,
            },
          })}
        />
        <Input
          placeholder="YY"
          maxLength={2}
          isError={cardExpirationDateErrors.year !== ''}
          data-expiry="year"
          inputMode="numeric"
          {...register('year', {
            validation: {
              required: true,
              length: 2,
              errorMessage: ERROR_MESSAGE.cardExpirationDate.year,
            },
          })}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardExpirationDateErrors)}</ErrorMessage>
    </div>
  );
}

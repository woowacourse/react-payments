import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { RegisterType } from '@/hooks';
import { CardNumberInputType } from '@/types/input';
import { getErrorMessageFromObject } from '@/utils/message';
import { ChangeEvent } from 'react';
import * as S from './CardNumber.styles';

interface CardNumberProps {
  cardNumberErrors: CardNumberInputType;
  register: RegisterType<CardNumberInputType>;
}

export default function CardNumber({ register, cardNumberErrors }: CardNumberProps) {
  const handleCardNumberInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length < 4) return;

    const currentSequenceNumber = Number(document.activeElement?.getAttribute('data-sequence'));
    const nextInput = document.querySelector(`input[data-sequence="${currentSequenceNumber + 1}"]`) as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  };

  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        <Input
          placeholder="1234"
          maxLength={4}
          isError={!!cardNumberErrors.first}
          aria-label="카드 번호 첫 번째 4자리"
          inputMode="numeric"
          data-sequence="1"
          {...register('first', {
            onChange: handleCardNumberInputChange,
            inputRegex: /^[0-9]*$/,
            validation: {
              required: true,
              length: 4,
              errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
            },
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={!!cardNumberErrors.second}
          aria-label="카드 번호 두 번째 4자리"
          inputMode="numeric"
          data-sequence="2"
          {...register('second', {
            onChange: handleCardNumberInputChange,
            inputRegex: /^[0-9]*$/,
            validation: {
              required: true,
              length: 4,
              errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
            },
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={!!cardNumberErrors.third}
          aria-label="카드 번호 세 번째 4자리"
          inputMode="numeric"
          data-sequence="3"
          {...register('third', {
            onChange: handleCardNumberInputChange,
            inputRegex: /^[0-9]*$/,
            validation: {
              required: true,
              length: 4,
              errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
            },
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={!!cardNumberErrors.fourth}
          aria-label="카드 번호 마지막 4자리"
          inputMode="numeric"
          data-sequence="4"
          {...register('fourth', {
            onChange: handleCardNumberInputChange,
            inputRegex: /^[0-9]*$/,
            validation: {
              required: true,
              length: 4,
              errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
            },
          })}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardNumberErrors)}</ErrorMessage>
    </div>
  );
}

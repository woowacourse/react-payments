import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { RegisterType } from '@/hooks/useForm';
import { CardNumberInputType } from '@/types/input';
import { getErrorMessageFromObject } from '@/utils/message';
import { checkAllNumber } from '@/utils/validation';
import { ChangeEvent } from 'react';
import * as S from './CardNumber.styles';

interface CardNumberProps {
  cardNumberErrorMessage: CardNumberInputType;
  register: RegisterType<CardNumberInputType>;
}

export default function CardNumber({ register, cardNumberErrorMessage }: CardNumberProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!checkAllNumber(value)) return;

    if (value.length === 4) {
      const currentSequenceNumber = Number(document.activeElement?.getAttribute('data-sequence'));
      const nextInput = document.querySelector(
        `input[data-sequence="${currentSequenceNumber + 1}"]`,
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
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
          isError={cardNumberErrorMessage.first !== ''}
          aria-label="카드 번호 첫 번째 4자리"
          inputMode="numeric"
          data-sequence="1"
          {...register('first', {
            onChange: handleInputChange,
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={cardNumberErrorMessage.second !== ''}
          aria-label="카드 번호 두 번째 4자리"
          inputMode="numeric"
          data-sequence="2"
          {...register('second', {
            onChange: handleInputChange,
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={cardNumberErrorMessage.third !== ''}
          aria-label="카드 번호 세 번째 4자리"
          inputMode="numeric"
          data-sequence="3"
          {...register('third', {
            onChange: handleInputChange,
          })}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          isError={cardNumberErrorMessage.fourth !== ''}
          aria-label="카드 번호 마지막 4자리"
          inputMode="numeric"
          data-sequence="4"
          {...register('fourth', {
            onChange: handleInputChange,
          })}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardNumberErrorMessage)}</ErrorMessage>
    </div>
  );
}

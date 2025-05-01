import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { Register } from '@/hooks';
import { CardNumberInput } from '@/types/input';
import { getErrorMessageFromObject } from '@/utils/message';
import * as S from './CardNumberInputField.styles';

interface CardNumberProps {
  cardNumberErrors: CardNumberInput;
  register: Register<CardNumberInput>;
}

export default function CardNumber({ register, cardNumberErrors }: CardNumberProps) {
  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        <Input
          autoFocus
          placeholder="1234"
          maxLength={4}
          isError={!!cardNumberErrors.first}
          aria-label="카드 번호 첫 번째 4자리"
          inputMode="numeric"
          data-sequence="1"
          {...register('first', {
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

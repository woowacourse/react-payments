import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { ERROR_MESSAGE } from '@/constants';
import { SequenceType } from '@/types';
import * as S from './CardNumber.styles';
import { getErrorMessageFromObject } from '@/utils/message';
import { checkAllNumber } from '@/utils/validation';

interface CardNumberProps {
  cardNumber: Record<SequenceType, string>;
  setCardNumber: Dispatch<SetStateAction<Record<SequenceType, string>>>;
  cardNumberErrorMessage: Record<SequenceType, string>;
  setCardNumberErrorMessage: Dispatch<SetStateAction<Record<SequenceType, string>>>;
}

interface HandleInputChangeParams {
  sequence: SequenceType;
  value: string;
}

export default function CardNumber({
  cardNumber,
  setCardNumber,
  cardNumberErrorMessage,
  setCardNumberErrorMessage,
}: CardNumberProps) {
  const handleInputChange = ({ value, sequence }: HandleInputChangeParams) => {
    if (!checkAllNumber(value)) return;

    setCardNumber((prev) => ({ ...prev, [sequence]: value }));

    if (value.length < 4) {
      setCardNumberErrorMessage((prev) => ({ ...prev, [sequence]: ERROR_MESSAGE.cardNumber.length }));
    } else {
      setCardNumberErrorMessage((prev) => ({ ...prev, [sequence]: '' }));

      const currentSequenceNumber = Number(document.activeElement?.getAttribute('data-sequence'));
      const nextInput = document.querySelector(
        `input[data-sequence="${currentSequenceNumber + 1}"]`,
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, sequence: SequenceType) => {
    const { value } = event.target;
    handleInputChange({ value, sequence });
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
          value={cardNumber.first}
          onChange={(event) => handleChange(event, 'first')}
          isError={cardNumberErrorMessage.first !== ''}
          aria-label="카드 번호 첫 번째 4자리"
          inputMode="numeric"
          data-sequence="1"
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.second}
          onChange={(event) => handleChange(event, 'second')}
          isError={cardNumberErrorMessage.second !== ''}
          aria-label="카드 번호 두 번째 4자리"
          inputMode="numeric"
          data-sequence="2"
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.third}
          onChange={(event) => handleChange(event, 'third')}
          isError={cardNumberErrorMessage.third !== ''}
          aria-label="카드 번호 세 번째 4자리"
          inputMode="numeric"
          data-sequence="3"
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.fourth}
          onChange={(event) => handleChange(event, 'fourth')}
          isError={cardNumberErrorMessage.fourth !== ''}
          aria-label="카드 번호 마지막 4자리"
          inputMode="numeric"
          data-sequence="4"
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardNumberErrorMessage)}</ErrorMessage>
    </div>
  );
}

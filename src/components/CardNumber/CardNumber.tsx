import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { Dispatch, SetStateAction, useRef, KeyboardEvent } from 'react';
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
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null),
  };

  const nextSequence: Record<SequenceType, SequenceType | null> = {
    first: 'second',
    second: 'third',
    third: 'fourth',
    fourth: null,
  };

  const prevSequence: Record<SequenceType, SequenceType | null> = {
    first: null,
    second: 'first',
    third: 'second',
    fourth: 'third',
  };

  const handleInputChange = ({ value, sequence }: HandleInputChangeParams) => {
    if (!checkAllNumber(value)) return;

    setCardNumber({ ...cardNumber, [sequence]: value });

    if (value.length < 4) {
      setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: ERROR_MESSAGE.cardNumber.length });
    } else {
      setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: '' });

      const next = nextSequence[sequence];
      if (next && inputRefs[next]?.current) {
        inputRefs[next].current?.focus();
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, sequence: SequenceType) => {
    if (event.key === 'Backspace' && cardNumber[sequence] === '') {
      const prev = prevSequence[sequence];
      if (prev && inputRefs[prev]?.current) {
        inputRefs[prev].current?.focus();
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
          value={cardNumber.first}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'first',
            })
          }
          onKeyDown={(event) => handleKeyDown(event, 'first')}
          isError={cardNumberErrorMessage.first !== ''}
          ref={inputRefs.first}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.second}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'second',
            })
          }
          onKeyDown={(event) => handleKeyDown(event, 'second')}
          isError={cardNumberErrorMessage.second !== ''}
          ref={inputRefs.second}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.third}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'third',
            })
          }
          onKeyDown={(event) => handleKeyDown(event, 'third')}
          isError={cardNumberErrorMessage.third !== ''}
          ref={inputRefs.third}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.fourth}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'fourth',
            })
          }
          onKeyDown={(event) => handleKeyDown(event, 'fourth')}
          isError={cardNumberErrorMessage.fourth !== ''}
          ref={inputRefs.fourth}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getErrorMessageFromObject(cardNumberErrorMessage)}</ErrorMessage>
    </div>
  );
}

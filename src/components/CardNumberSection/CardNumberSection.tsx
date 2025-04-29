import { InputSection } from '../InputSection/InputSection';
import Input from '../Input/Input';
import { CardNumberKey, CardNumberType } from '../../types';
import { RefObject } from 'react';

export type CardNumberSectionProp = {
  cardNumbers: CardNumberType;
  onCardNumbersChange: (field: keyof CardNumberType, value: string) => void;
  cardInputRefs: {
    first: RefObject<HTMLInputElement | null>;
    second: RefObject<HTMLInputElement | null>;
    third: RefObject<HTMLInputElement | null>;
    fourth: RefObject<HTMLInputElement | null>;
  };
  getCardNumberErrorMessage: (cardNumbers: CardNumberType) => string;
};

export default function CardNumberSection({ cardNumbers, onCardNumbersChange, cardInputRefs, getCardNumberErrorMessage }: CardNumberSectionProp) {
  return (
    <div>
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해 주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <div>
        <InputSection.Label text="카드번호" />
        <InputSection.InputWrapper>
          {(Object.keys(cardNumbers) as CardNumberKey[]).map((inputKey, index) => (
            <Input
              pattern="[0-9]{4}"
              required
              key={inputKey}
              value={cardNumbers[inputKey].value}
              isError={cardNumbers[inputKey].isError}
              placeholder={'1234'}
              onChange={(e) => {
                onCardNumbersChange(inputKey, e.target.value);
              }}
              autoFocus={index === 0 && cardNumbers[inputKey].value.length === 0}
              ref={cardInputRefs[inputKey]}
              maxLength={4}
            />
          ))}
        </InputSection.InputWrapper>

        <InputSection.Error message={getCardNumberErrorMessage(cardNumbers)} />
      </div>
    </div>
  );
}

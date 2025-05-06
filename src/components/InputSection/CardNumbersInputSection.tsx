import useRefFocus from '@/hooks/useRefFocus';
import {
  CardNumbersInputSectionProps,
  CardNumbersKeys,
} from '../../types/CardNumbers';
import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';
import { useEffect, useState } from 'react';

const CARD_NUMBERS_TEXT = {
  title: '카드번호를 입력해 주세요',
  description: '본인 명의의 카드만 결제 가능합니다',
  subtitle: '카드번호',
};

const CardNumbersInputSection = ({
  cardNumbers,
  setCardNumbers,
  handleCardNumbersBlur,
  isError,
  errorMessage,
  inputRef,
  handleMouseDown,
  goNextStep,
}: CardNumbersInputSectionProps) => {
  const { focusFirst, focusNext } = useRefFocus(Object.values(inputRef));

  const handleChangeInput =
    (key: CardNumbersKeys) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardNumbers(key)(e);
      if (key === 'fourthNumber' && e.target.value.length === 4) {
        goNextStep({ time: 'once', key: 'cardNumbers' });
      }

      if (e.target.value.length === 4) {
        focusNext();
      }
    };

  useEffect(() => {
    focusFirst();
  }, []);

  return (
    <>
      <InputSection
        title={CARD_NUMBERS_TEXT.title}
        description={CARD_NUMBERS_TEXT.description}
        subtitle={CARD_NUMBERS_TEXT.subtitle}
      >
        {(
          [
            'firstNumber',
            'secondNumber',
            'thirdNumber',
            'fourthNumber',
          ] as const
        ).map((key) => (
          <InputField
            key={key}
            value={cardNumbers[key]}
            name={`card${key}`}
            onChange={handleChangeInput(key)}
            onBlur={() => handleCardNumbersBlur(key)}
            isError={isError[key]}
            placeholder="1234"
            ref={inputRef[key]}
            onMouseDown={handleMouseDown}
          />
        ))}
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardNumbersInputSection;

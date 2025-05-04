import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';
import {
  CardExpirationDateInputSectionProps,
  CardExpirationDateKeys,
} from '../../types/CardExpirationDateOptions';
import { useEffect } from 'react';
import useRefFocus from '@/hooks/useRefFocus';

export const CARD_EXPIRATION_DATE_TEXT = {
  title: '카드 유효기간을 입력해 주세요',
  description: '월/년도(MM/YY) 순서대로 입력해 주세요',
  subtitle: '유효기간',
};

const CardExpirationDateInputSection = ({
  cardExpirationDate,
  setCardExpirationDate,
  handleCardExpirationDateBlur,
  isError,
  errorMessage,
  inputRef,
  handleMouseDown,
  goNextStep,
}: CardExpirationDateInputSectionProps) => {
  const { focusFirst, focusNext } = useRefFocus(Object.values(inputRef));

  useEffect(() => {
    focusFirst();
  }, []);

  useEffect(() => {
    if (cardExpirationDate.month.length === 2) {
      inputRef.year.current?.focus();
    }
  }, [cardExpirationDate.month]);

  const handleMonthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpirationDate('month')(e);
    if (e.target.value.length === 2) {
      focusNext();
    }
  };

  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpirationDate('year')(e);
    if (e.target.value.length === 2) {
      goNextStep({ time: 'once', key: 'cardExpirationDate' });
    }
  };

  return (
    <>
      <InputSection
        title={CARD_EXPIRATION_DATE_TEXT.title}
        description={CARD_EXPIRATION_DATE_TEXT.description}
        subtitle={CARD_EXPIRATION_DATE_TEXT.subtitle}
      >
        <InputField
          value={cardExpirationDate.month}
          name="expirationDateMonth"
          onChange={handleMonthInputChange}
          isError={isError.month}
          placeholder="MM"
          onBlur={() => handleCardExpirationDateBlur('month')}
          ref={inputRef.month}
          onMouseDown={handleMouseDown}
        ></InputField>
        <InputField
          value={cardExpirationDate.year}
          name="expirationDateYear"
          onChange={handleYearInputChange}
          isError={isError.year}
          placeholder="YY"
          onBlur={() => handleCardExpirationDateBlur('year')}
          ref={inputRef.year}
          onMouseDown={handleMouseDown}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardExpirationDateInputSection;

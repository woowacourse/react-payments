import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';
import {
  CardExpirationDateInputSectionProps,
  CardExpirationDateOptions,
} from '../../types/CardExpirationDateOptions';

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
}: CardExpirationDateInputSectionProps) => {
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
          onChange={setCardExpirationDate('month')}
          isError={isError.month}
          placeholder="MM"
          onBlur={() => handleCardExpirationDateBlur('month')}
        ></InputField>
        <InputField
          value={cardExpirationDate.year}
          name="expirationDateYear"
          onChange={setCardExpirationDate('year')}
          isError={isError.year}
          placeholder="YY"
          onBlur={() => handleCardExpirationDateBlur('year')}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardExpirationDateInputSection;

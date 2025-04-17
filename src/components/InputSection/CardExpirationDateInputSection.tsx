import ErrorMessage from '../ErrorMessage';
import InputField from '../InputField';
import InputSection from './InputSection';
import { CardExpirationDateOptions } from '../../types/CardExpirationDateOptions';

const CardExpirationDateInputSection = ({
  cardExpirationDate,
  setCardExpirationDate,
  isError,
  errorMessage,
}: CardExpirationDateOptions) => {
  return (
    <InputSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MM/YY) 순서대로 입력해 주세요"
      subtitle="유효기간"
    >
      <InputField
        value={cardExpirationDate.month}
        onChange={setCardExpirationDate('month')}
        isError={isError.month}
        placeholder="MM"
      ></InputField>
      <InputField
        value={cardExpirationDate.year}
        onChange={setCardExpirationDate('year')}
        isError={isError.year}
        placeholder="YY"
      ></InputField>

      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

export default CardExpirationDateInputSection;

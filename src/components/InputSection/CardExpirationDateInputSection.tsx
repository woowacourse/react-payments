import ErrorMessage from '../ErrorMessage';
import InputField from '../InputField';
import InputSection from './InputSection';
import useCardExpirationDate from '../../hooks/useCardExpirationDate';
import styles from './inputSection.module.css';

const CardExpirationDateInputSection = () => {
  const { cardExpirationDate, setCardExpirationDate, isError, errorMessage } =
    useCardExpirationDate();

  return (
    <InputSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MM/YY) 순서대로 입력해 주세요"
      subtitle="유효기간"
    >
      <div className={styles.inputContainer}>
        <InputField
          value={cardExpirationDate.month}
          onChange={setCardExpirationDate('month')}
          isError={isError.month}
        ></InputField>
        <InputField
          value={cardExpirationDate.year}
          onChange={setCardExpirationDate('year')}
          isError={isError.year}
        ></InputField>
      </div>
      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

export default CardExpirationDateInputSection;

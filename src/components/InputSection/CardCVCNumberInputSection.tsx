import useCardCVCNumber from '../../hooks/useCardCVCNumber';
import ErrorMessage from '../ErrorMessage';
import InputField from '../InputField';
import InputSection from './InputSection';
import styles from './inputSection.module.css';

const CardCVCNumberInputSection = () => {
  const { cardCVCNumber, setCardCVCNumber, isError, errorMessage } =
    useCardCVCNumber();

  return (
    <InputSection title="CVC 번호를 입력해주세요" description="" subtitle="CVC">
      <InputField
        value={cardCVCNumber}
        onChange={setCardCVCNumber}
        isError={isError}
        placeholder="123"
      ></InputField>

      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

export default CardCVCNumberInputSection;

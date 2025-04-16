import { CardNumbersOptions } from '../../hooks/useCardNumbers';
import InputField from '../InputField';
import styles from './inputSection.module.css';

const CardNumbersInputs = ({
  cardNumbers,
  setCardNumbers,
  isError,
}: CardNumbersOptions) => {
  return (
    <div className={styles.inputContainer}>
      <InputField
        value={cardNumbers.firstNumber}
        onChange={setCardNumbers('firstNumber')}
        isError={isError.firstNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.secondNumber}
        onChange={setCardNumbers('secondNumber')}
        isError={isError.secondNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.thirdNumber}
        onChange={setCardNumbers('thirdNumber')}
        isError={isError.thirdNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.fourthNumber}
        onChange={setCardNumbers('fourthNumber')}
        isError={isError.fourthNumber}
        placeholder="1234"
      ></InputField>
    </div>
  );
};

export default CardNumbersInputs;
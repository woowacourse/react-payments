import {
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../../../constants';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

interface CardNumbersInputProps {
  maxLength: number;
  numbers: string[];
  numberErrors: boolean[];
  onNumberChange: (value: string, index: number) => void;
}

function CardNumbersInput({
  maxLength,
  numbers,
  numberErrors,
  onNumberChange,
}: CardNumbersInputProps) {
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;

  const getErrorMessage = () => {
    if (numberErrors.every((isError) => !isError)) {
      return;
    }
    return ERROR_MESSAGE.cardNumber;
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div className={styles.inputWrap}>
          {numbers.map((number, index) => (
            <Input
              key={`${NUMBERS_NAME_PREFIX}${index}`}
              type="number"
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              value={number}
              maxLength={maxLength}
              placeholder={placeholder}
              isError={numberErrors[index]}
              onChange={(event) => onNumberChange(event.target.value, index)}
            />
          ))}
        </div>
      </InputField>
      <InputErrorMessage errorMessage={getErrorMessage()} />
    </InputWrap>
  );
}

export default CardNumbersInput;

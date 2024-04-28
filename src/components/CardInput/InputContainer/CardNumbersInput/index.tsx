import {
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
  INPUT_LENGTH,
} from '../../../../constants';
import useAutoFocus from '../../../../hooks/useAutoFocus';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

interface CardNumbersInputProps {
  numbers: string[];
  numberErrors: boolean[];
  onNumberChange: (value: string, index: number) => void;
}

function CardNumbersInput({
  numbers,
  numberErrors,
  onNumberChange,
}: CardNumbersInputProps) {
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;
  const { setElementRef, focusElementAtIndex } = useAutoFocus(numbers.length);

  const handleInputChange = (value: string, index: number) => {
    onNumberChange(value, index);
    if (value.length === INPUT_LENGTH.cardNumber) {
      focusElementAtIndex(index + 1);
    }
  };

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
              ref={(element) => setElementRef(element, index)}
              type="number"
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              value={number}
              placeholder={placeholder}
              isError={numberErrors[index]}
              onChange={(event) => handleInputChange(event.target.value, index)}
            />
          ))}
        </div>
      </InputField>
      <InputErrorMessage errorMessage={getErrorMessage()} />
    </InputWrap>
  );
}

export default CardNumbersInput;

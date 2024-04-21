import {
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
  INPUT_LENGTH,
} from '../../constants';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import Input from '../common/Input';
import FormErrorMessage from '../FormErrorMessage';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

interface CardNumbersInputProps {
  numbers: number[];
  numberErrors: boolean[];
  onNumberChange: (value: string, index: number) => void;
}
export default function CardNumbersInput({
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
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div className={styles.inputWrap}>
          {numbers.map((number, index) => (
            <Input
              key={`${NUMBERS_NAME_PREFIX}${index}`}
              type="number"
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              value={number}
              maxLength={INPUT_LENGTH.CARD_NUMBERS}
              placeholder={placeholder}
              isError={numberErrors[index]}
              onChange={(event) => onNumberChange(event.target.value, index)}
            />
          ))}
        </div>
      </CardInput>
      <FormErrorMessage errorMessage={getErrorMessage()} />
    </CardInputContainer>
  );
}

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';

import { CARD_NUMBER_UNIT_PLACEHOLDER, CARD_NUMBER_UNIT_LENGTH } from '../../../constants/input';
import { ERROR_MESSAGES } from '../../../constants/errorMessages';
import useErrorMessages from '../../../hooks/useErrorMessages';

type CardNumberInputField = {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
};

export default function CardNumbersInputField({ cardNumbers, setCardNumbers }: CardNumberInputField) {
  const { errorMessages, setErrorMessages } = useErrorMessages(cardNumbers.length);

  const getErrorMessage = (numberUnit: string) => {
    if (isNaN(Number(numberUnit)) && numberUnit.length !== 0) {
      return ERROR_MESSAGES.NOT_NUMBER;
    }

    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const number = e.target.value;

    const errorMessage = getErrorMessage(number);
    setErrorMessages(errorMessage, index);

    if (errorMessage !== '') return;

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = e.target.value;
    setCardNumbers(updatedCardNumbers);
  };

  const handleInputBlur = (index: number) => {
    const number = cardNumbers[index];
    if (number.length < CARD_NUMBER_UNIT_LENGTH) {
      setErrorMessages(ERROR_MESSAGES.CARD_NUMBER_UNIT_LENGTH, index);

      return;
    }

    setErrorMessages('', index);
  };

  return (
    <>
      <div className={styles.label}>카드 번호</div>
      <div className={styles.horizon__gap__container}>
        {cardNumbers.map((cardNumber, i) => (
          <Input
            onChange={(e) => handleChange(e, i)}
            placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
            maxLength={CARD_NUMBER_UNIT_LENGTH}
            value={cardNumber}
            type={i >= cardNumbers.length / 2 ? 'password' : 'type'}
            isError={errorMessages[i] !== ''}
            onBlur={() => handleInputBlur(i)}
          />
        ))}
      </div>
      {errorMessages.some((message) => message !== '') && (
        <div className={styles.error_message}>{errorMessages.find((message) => message !== '')}</div>
      )}
    </>
  );
}

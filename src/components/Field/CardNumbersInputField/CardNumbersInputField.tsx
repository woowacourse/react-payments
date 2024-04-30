import { ChangeEvent, useRef } from 'react';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';

import { CARD_NUMBER_UNIT_PLACEHOLDER, CARD_NUMBERS_UNIT_LENGTH } from '../../../constants/input';

type CardNumberInputField = {
  cardNumbers: string[];
  handleCardNumbers: (index: number) => (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessages: string[];
};

export default function CardNumbersInputField({ cardNumbers, handleCardNumbers, errorMessages }: CardNumberInputField) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length === CARD_NUMBERS_UNIT_LENGTH && index !== cardNumbers.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <div className={styles.label}>카드 번호</div>
      <div className={styles.horizon__gap__container}>
        {cardNumbers.map((cardNumber, i) => (
          <Input
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e) => {
              handleFocus(e, i);
              handleCardNumbers(i)(e);
            }}
            placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
            maxLength={CARD_NUMBERS_UNIT_LENGTH}
            value={cardNumber}
            type={i >= cardNumbers.length / 2 ? 'password' : 'type'}
            isError={errorMessages[i] !== ''}
            onBlur={handleCardNumbers(i)}
          />
        ))}
      </div>
      {errorMessages.some((message) => message !== '') && (
        <div className={styles.error_message}>{errorMessages.find((message) => message !== '')}</div>
      )}
    </>
  );
}

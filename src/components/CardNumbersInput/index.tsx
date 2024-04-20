import { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_MARK_REGEXP,
  CARD_NUMBER_REGEXP,
  CARD_NUMBERS,
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import { CardMark } from '../../modules/useCardInfoReducer';
import { sliceText } from '../../utils/textChangerUtils';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

type CardNumbers = (number | undefined)[];
interface CardNumbersInputProps {
  editCardMark: (mark: CardMark) => void;
  editCardNumbers: (number: string) => void;
}

export default function CardNumbersInput(props: CardNumbersInputProps) {
  const { editCardMark, editCardNumbers } = props;
  const { length } = CARD_NUMBERS;
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;

  const [numbers, setNumbers] = useState<CardNumbers>(() =>
    Array.from({ length }, () => undefined),
  );

  const [numbersError, setNumbersError] = useState<boolean[]>(() =>
    Array.from({ length }, () => false),
  );

  const pickCardMark = (): CardMark => {
    const numberText = numbers.join('');

    if (CARD_MARK_REGEXP.visa.test(numberText)) {
      return 'visa';
    }
    if (CARD_MARK_REGEXP.master.test(numberText)) {
      return 'master';
    }
    return 'etc';
  };

  const updateNumbersError = (newNumbers: (number | undefined)[]) => {
    const newNumbersError = newNumbers.map((item) =>
      !item ? true : !CARD_NUMBER_REGEXP.test(item.toString()),
    );
    setNumbersError(newNumbersError);
  };

  const updateNumbers = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value ? Number(sliceText(value, length)) : undefined;

    setNumbers(newNumbers);

    return newNumbers;
  };

  const isError = () => numbersError.some((i) => i);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const { value, name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));

    const newNumbers = updateNumbers(index, value);
    updateNumbersError(newNumbers);
  };

  const getErrorMessage = () =>
    isError() ? ERROR_MESSAGE.cardNumber : undefined;

  useEffect(() => {
    editCardNumbers(numbers.join());
    editCardMark(pickCardMark());
  }, [numbers, numbersError]);

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div className={styles.inputWrap} onChange={handleChange}>
          {Array.from({ length }).map((_, index) => (
            <Input
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              type="number"
              value={numbers[index]}
              error={numbersError[index]}
              placeholder={placeholder}
            />
          ))}
        </div>
      </CardInput>
      <FormErrorMessage>
        <p> {getErrorMessage()}</p>
      </FormErrorMessage>
    </CardInputContainer>
  );
}

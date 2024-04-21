import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import {
  CARD_MARK_REGEXP,
  CARD_NUMBER_REGEXP,
  CARD_NUMBERS,
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import { CardMark, CardNumbers } from '../../modules/useCardInfoReducer';
import { sliceText } from '../../utils/textChangerUtils';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import Input from '../Input';
import InputErrorMessage from '../InputErrorMessage';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

interface CardNumbersInputProps {
  editCardMark: (mark: CardMark) => void;
  editCardNumbers: (numbers: CardNumbers) => void;
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

  const cardMark = useMemo((): CardMark => {
    const numberText = numbers.join('');

    if (CARD_MARK_REGEXP.visa.test(numberText)) {
      return 'visa';
    }
    if (CARD_MARK_REGEXP.master.test(numberText)) {
      return 'master';
    }
    return 'etc';
  }, [numbers]);

  const errorMessage = useMemo(() => {
    const isError = numbersError.some((i) => i);
    return isError ? ERROR_MESSAGE.cardNumber : undefined;
  }, [numbersError]);

  /**
   * change 이벤트가 일어난 input의 입력값, index에 따라 변경될 numbers를 계산하고 반환하는 함수
   *  입력값이 있을 경우 이를 설정한 length에서 자르고 반영함
   */
  const getNewNumbers = useCallback(
    (index: number, value: string) => {
      const newNumbers = [...numbers];
      newNumbers[index] = value ? Number(sliceText(value, length)) : undefined;

      return newNumbers;
    },
    [numbers, length],
  );

  /**
   * 카드번호 입력값에 대한 유효성 검사를 진행하고, 검사 결과에 따라 numbersError 상태를 업데이트함
   * @param newNumbers 유효성 검사를 진행할 대상
   */
  const updateNumbersError = (newNumbers: (number | undefined)[]) => {
    const newNumbersError = newNumbers.map((item) =>
      !item ? true : !CARD_NUMBER_REGEXP.test(item.toString()),
    );

    setNumbersError(newNumbersError);
  };

  /**
   * 카드 번호 입력 핸들러, 입력값에 따라 numbers,numbersError,cardInfo 상태를 업데이트함
   */
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const { value, name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));
    // numbers 업데이트
    const newNumbers = getNewNumbers(index, value);
    setNumbers(newNumbers);
    // numbersError 업데이트
    updateNumbersError(newNumbers);
    // cardInfo 변경
    editCardNumbers(numbers);
    editCardMark(cardMark);
  };

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div className={styles.inputWrap} onChange={handleNumberChange}>
          {Array.from({ length }).map((_, index) => (
            <Input
              key={`number_${index}`}
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              type="number"
              label={`카드 ${index + 1}째 네자리 번호`}
              value={numbers[index]}
              error={numbersError[index]}
              placeholder={placeholder}
            />
          ))}
        </div>
      </CardInput>
      <InputErrorMessage>
        <p> {errorMessage}</p>
      </InputErrorMessage>
    </CardInputContainer>
  );
}

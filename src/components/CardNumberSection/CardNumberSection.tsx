import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useRef } from 'react';
import Input from '../Input/Input';
import { CardLogoKey, CardNumberKey, CardNumberType } from '../../types';
import { CARD_BRANDS } from '../../constants';

type Props = {
  cardNumbers: CardNumberType;
  setCardNumbers: Dispatch<SetStateAction<CardNumberType>>;
};

export default function CardNumberSection({ cardNumbers, setCardNumbers }: Props) {
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null)
  };

  const handleCardNumberChange = (field: keyof CardNumberType, value: string) => {
    const isError = !Number.isInteger(+value);

    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError }
    }));

    if (field == 'fourth' || value.length !== 4) {
      return;
    }

    const keys = Object.keys(inputRefs);
    const nextKey = keys[keys.indexOf(field) + 1] as keyof typeof inputRefs;
    inputRefs[nextKey].current!.focus();

    if (field !== 'first') {
      return;
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해 주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="카드번호" />
        <div className={styles.inputWrapper}>
          {(Object.keys(cardNumbers) as CardNumberKey[]).map((inputKey, index) => (
            <Input
              key={index}
              value={cardNumbers[inputKey].value}
              isError={cardNumbers[inputKey].isError}
              placeholder={'1234'}
              onChange={(e) => {
                handleCardNumberChange(inputKey, e.target.value);
              }}
              ref={inputRefs[inputKey]}
              maxLength={4}
            />
          ))}
        </div>

        <InputSection.Error message={getCardNumberErrorMessage(cardNumbers)} />
      </div>
    </div>
  );
}

const getCardNumberErrorMessage = (cardNumbers: CardNumberType) => {
  const hasError = Object.values(cardNumbers).some(({ isError }) => isError);
  return hasError ? '숫자만 입력 가능합니다.' : '';
};

import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction } from 'react';
import { CardNumberType } from '../../App';
import Input from '../Input/Input';

type Props = {
  cardNumbers: CardNumberType;
  setCardLogo: Dispatch<SetStateAction<'visa' | 'master' | ''>>;
  setCardNumbers: Dispatch<SetStateAction<CardNumberType>>;
};

export default function CardNumberSection({ cardNumbers, setCardNumbers, setCardLogo }: Props) {
  type CardNumberKey = keyof CardNumberType;

  const handleCardNumberChange = (field: keyof CardNumberType, value: string) => {
    const isValid = /^[0-9]*$/.test(value);
    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError: isValid }
    }));

    if (cardNumbers.first.value.startsWith('4')) {
      setCardLogo('visa');
    } else if (51 <= Number(cardNumbers.first.value.slice(0, 2)) && Number(cardNumbers.first.value.slice(0, 2)) <= 55) {
      setCardLogo('master');
    } else {
      setCardLogo('');
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
              isValid={!cardNumbers[inputKey].isError}
              placeholder={'1234'}
              onChange={(e) => handleCardNumberChange(inputKey, e.target.value)}
              maxLength={4}
            />
          ))}
        </div>

        <InputSection.Error
          message={Object.values(cardNumbers).some(({ isError }) => isError) ? '숫자만 입력 가능합니다.' : ''}
        />
      </div>
    </div>
  );
}

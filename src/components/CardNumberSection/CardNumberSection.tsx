import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction } from 'react';
import { CardLogoKey, CardNumberKey, CardNumberType } from '../../App';
import Input from '../Input/Input';

type Props = {
  cardNumbers: CardNumberType;
  setCardLogo: Dispatch<SetStateAction<CardLogoKey | null>>;
  setCardNumbers: Dispatch<SetStateAction<CardNumberType>>;
};

export default function CardNumberSection({ cardNumbers, setCardNumbers, setCardLogo }: Props) {
  const handleCardNumberChange = (field: keyof CardNumberType, value: string) => {
    const isValid = Number.isInteger(value);
    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError: isValid }
    }));

    if (field !== 'first') {
      return;
    }
    setCardLogo(getCardBrand(value));
  };

  const getCardBrand = (value: string) => {
    if (value.startsWith('4')) {
      return 'visa';
    }

    const firstCardNumber = Number(value.slice(0, 2));
    if (51 <= firstCardNumber && firstCardNumber <= 55) {
      return 'master';
    }
    return null;
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

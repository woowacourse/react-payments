import styles from './CardNumberSection.module.css';
import { InputSection } from '../common/InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';
import { CardLogo, CardNumber } from '../../types/card';

type Props = {
  cardNumbers: CardNumber;
  setCardLogo: Dispatch<SetStateAction<CardLogo>>;
  setCardNumbers: Dispatch<SetStateAction<CardNumber>>;
};

export default function CardNumberSection({ cardNumbers, setCardNumbers, setCardLogo }: Props) {
  const [cardValidity, setCardValidity] = useState<Record<keyof CardNumber, boolean>>({
    first: true,
    second: true,
    third: true,
    fourth: true
  });

  const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
    setCardNumbers((prev) => ({ ...prev, [key]: value }));

    const isValidNumber = validateNumberValidity(value);
    setCardValidity((prev) => ({ ...prev, [key]: isValidNumber }));

    const first = key === 'first' ? value : cardNumbers.first;
    updateCardLogoFromNumbers(first);
  };

  function validateNumberValidity(value: string): boolean {
    return /^[0-9]*$/.test(value);
  }

  function updateCardLogoFromNumbers(numbers: string) {
    if (numbers.startsWith('4')) {
      setCardLogo('visa');
      return;
    }
    if (51 <= Number(numbers.slice(0, 2)) && Number(numbers.slice(0, 2)) <= 55) {
      setCardLogo('master');
      return;
    }

    return setCardLogo('');
  }

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해 주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="카드번호" />
        <InputSection.InputWrapper<keyof CardNumber>
          fields={[
            { key: 'first', value: cardNumbers.first },
            { key: 'second', value: cardNumbers.second },
            { key: 'third', value: cardNumbers.third },
            { key: 'fourth', value: cardNumbers.fourth }
          ]}
          onChange={handleCardNumberChange}
          valid={{
            first: cardValidity.first,
            second: cardValidity.second,
            third: cardValidity.third,
            fourth: cardValidity.fourth
          }}
          placeholders={{
            first: '1234',
            second: '1234',
            third: '1234',
            fourth: '1234'
          }}
          maxLength={4}
        />
        <InputSection.Error message={Object.values(cardValidity).every((v) => v) ? '' : '숫자만 입력 가능합니다.'} />
      </div>
    </div>
  );
}

import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  cardNumbers: string[];
  setCardLogo: Dispatch<SetStateAction<'visa' | 'master' | ''>>;
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
};

export default function CardNumberSection({ cardNumbers, setCardNumbers, setCardLogo }: Props) {
  const [cardValidity, setCardValidity] = useState<boolean[]>([true, true, true, true]);

  const handleCardNumberChange = (index: number, value: string) => {
    const isValid = /^[0-9]*$/.test(value);
    const updatedNumbers = [...cardNumbers];
    updatedNumbers[index] = value;
    setCardNumbers(updatedNumbers);

    const updatedValidity = [...cardValidity];
    updatedValidity[index] = isValid;
    setCardValidity(updatedValidity);

    if (updatedNumbers[0].startsWith('4')) {
      setCardLogo('visa');
    } else if (51 <= Number(updatedNumbers[0].slice(0, 2)) && Number(updatedNumbers[0].slice(0, 2)) <= 55) {
      setCardLogo('master');
    } else {
      setCardLogo('');
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드번호" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="카드번호" />
      <InputSection.InputWrapper
        numbers={cardNumbers}
        onChange={handleCardNumberChange}
        valid={cardValidity}
        placeholders={['1234', '1234', '1234', '1234']}
        maxLength={4}
      />
      {!cardValidity.every((v) => v) && <InputSection.Error message="숫자만 입력 가능합니다." />}
    </div>
  );
}

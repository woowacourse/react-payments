import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';

type Props = {
  cardNumbers: string[];
  cardValidity: boolean[];
  onChange: (index: number, value: string) => void;
};

export default function CardNumberSection({ cardNumbers, cardValidity, onChange }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드번호" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="카드번호" />
      <InputSection.InputWrapper
        numbers={cardNumbers}
        onChange={onChange}
        valid={cardValidity}
        placeholders={['1234', '1234', '1234', '1234']}
        maxLength={4}
      />
      {!cardValidity.every((v) => v) && <InputSection.Error message="숫자만 입력 가능합니다." />}
    </div>
  );
}

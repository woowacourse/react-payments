import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';

type Props = {
  expiration: string[];
  expirationError: string[];
  onChange: (index: number, value: string) => void;
};

export default function CardExpirationSection({ expiration, expirationError, onChange }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="유효기간 (MM/YY)" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="유효기간" />
      <InputSection.InputWrapper
        numbers={expiration}
        onChange={onChange}
        valid={expirationError.map((msg) => msg === '')}
        placeholders={['MM', 'YY']}
        maxLength={2}
      />
      <div>{expirationError.map((msg, index) => msg && <InputSection.Error key={index} message={msg} />)}</div>
    </div>
  );
}

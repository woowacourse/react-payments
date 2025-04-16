import { InputSection } from '../InputSection/InputSection';
import styles from './CvcSection.module.css';

type Props = {
  cvc: string;
  cvcError: string;
  onChange: (value: string) => void;
};

export default function CvcSection({ cvc, cvcError, onChange }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <InputSection.Label text="CVC" />
      <InputSection.InputWrapper
        numbers={[cvc]}
        onChange={(_index, value) => onChange(value)}
        valid={[cvcError === '']}
        placeholders={['123']}
        maxLength={3}
      />
      {cvcError && <InputSection.Error message={cvcError} />}
    </div>
  );
}

import { useFormContext } from '../../contexts/useFormContext';
import Input from '../Input/Input';
import { InputSection } from '../InputSection/InputSection';
import styles from './PasswordSection.module.css';

export default function PasswordSection() {
  const { handlePasswordChange, password } = useFormContext();
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="비밀번호를 입력해 주세요" />
        <InputSection.SubTitle title="앞의 2자리를 입력해주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="비밀번호 앞 2자리" />

        <Input
          onChange={(e) => handlePasswordChange(e.target.value)}
          value={password.value}
          isError={Boolean(password.errorMessage)}
          type="password"
          maxLength={2}
        />

        {password.errorMessage && <InputSection.Error message={password.errorMessage} />}
      </div>
    </div>
  );
}

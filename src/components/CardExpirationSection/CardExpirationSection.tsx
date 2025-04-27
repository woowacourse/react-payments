import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import Input from '../Input/Input';
import { useFormContext } from '../../contexts/useFormContext';

export default function CardExpirationSection() {
  const { expiration, expirationRef, handleExpirationChange } = useFormContext();

  const isError = expiration.month.errorMessage || expiration.year.errorMessage;

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드 유효기간을 입력해 주세요" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>

      <div className={styles.inputSection}>
        <InputSection.Label text="유효기간" />

        <div className={styles.inputWrapper}>
          <Input
            autoFocus={expiration.month.value == '' && expiration.year.value == ''}
            value={expiration.month.value}
            placeholder="MM"
            isError={Boolean(expiration.month.errorMessage)}
            onChange={(e) => handleExpirationChange('month', e.target.value)}
            maxLength={2}
            ref={expirationRef.month}
          />
          <Input
            value={expiration.year.value}
            placeholder="YY"
            isError={Boolean(expiration.year.errorMessage)}
            onChange={(e) => handleExpirationChange('year', e.target.value)}
            maxLength={2}
            ref={expirationRef.year}
          />
        </div>

        {isError && <InputSection.Error message={expiration.month.errorMessage || expiration.year.errorMessage} />}
      </div>
    </div>
  );
}

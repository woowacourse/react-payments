import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { useEffect, useRef } from 'react';
import Input from '../Input/Input';
import { ExpirationKey, ExpirationType } from '../../types';

type Props = {
  expiration: ExpirationType;
  onExpirationChange: (field: ExpirationKey, value: string) => void;
};

export default function CardExpirationSection({ expiration, onExpirationChange }: Props) {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expiration.month.value.length === 2) {
      yearRef.current?.focus();
    }
  }, [expiration.month.value]);

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
            value={expiration.month.value}
            placeholder="MM"
            isError={Boolean(expiration.month.errorMessage)}
            onChange={(e) => onExpirationChange('month', e.target.value)}
            maxLength={2}
            ref={monthRef}
          />
          <Input
            value={expiration.year.value}
            placeholder="YY"
            isError={Boolean(expiration.year.errorMessage)}
            onChange={(e) => onExpirationChange('year', e.target.value)}
            maxLength={2}
            ref={yearRef}
          />
        </div>

        {isError && <InputSection.Error message={expiration.month.errorMessage || expiration.year.errorMessage} />}
      </div>
    </div>
  );
}

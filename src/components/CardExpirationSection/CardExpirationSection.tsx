import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import Input from '../Input/Input';
import { ExpirationKey, ExpirationType } from '../../types';

type Props = {
  expiration: ExpirationType;
  onExpirationChange: (field: ExpirationKey, value: string) => void;
  ref: { month: React.RefObject<HTMLInputElement | null>; year: React.RefObject<HTMLInputElement | null> };
};

export default function CardExpirationSection({ expiration, onExpirationChange, ref }: Props) {
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
            ref={ref.month}
          />
          <Input
            value={expiration.year.value}
            placeholder="YY"
            isError={Boolean(expiration.year.errorMessage)}
            onChange={(e) => onExpirationChange('year', e.target.value)}
            maxLength={2}
            ref={ref.year}
          />
        </div>

        {isError && <InputSection.Error message={expiration.month.errorMessage || expiration.year.errorMessage} />}
      </div>
    </div>
  );
}

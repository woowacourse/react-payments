import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';
import { Expiration, ExpirationKey } from '../../App';
import Input from '../Input/Input';

type Props = {
  expiration: Expiration;
  setExpiration: Dispatch<SetStateAction<Expiration>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const [expirationError, setExpirationError] = useState<Expiration>({ month: '', year: '' });

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    setExpiration((prev) => ({
      ...prev,
      [field]: value
    }));

    const errorMessage = getErrorMessage(field, value);

    setExpirationError((prev) => ({
      ...prev,
      [field]: errorMessage
    }));
  };

  const getErrorMessage = (field: 'month' | 'year', value: string) => {
    if (!Number.isInteger(value)) {
      return '숫자만 입력 가능합니다.';
    }

    if (field === 'month') {
      return getMonthErrorMessage(value);
    }

    if (field === 'year') {
      return getYearErrorMessage(value);
    }
  };

  const getMonthErrorMessage = (value: string) => {
    if (value == '') {
      return '';
    }

    const month = Number(value);
    if (month < 1 || month > 12) {
      return '1부터 12 사이의 숫자를 입력해주세요.';
    }

    return '';
  };

  const getYearErrorMessage = (value: string) => {
    if (value !== '' && value.length !== 2) {
      return '2자리 숫자를 입력해주세요.';
    }
  };

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
            value={expiration.month}
            placeholder="MM"
            isValid={expirationError.month === ''}
            onChange={(e) => handleExpirationChange('month', e.target.value)}
            maxLength={2}
          />
          <Input
            value={expiration.year}
            placeholder="YY"
            isValid={expirationError.year === ''}
            onChange={(e) => handleExpirationChange('year', e.target.value)}
            maxLength={2}
          />
        </div>

        {(expirationError.month || expirationError.year) && (
          <InputSection.Error message={expirationError.month || expirationError.year} />
        )}
      </div>
    </div>
  );
}

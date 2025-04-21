import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';
import { Expiration } from '../../App';
import Input from '../Input/Input';

type Props = {
  expiration: Expiration;
  setExpiration: Dispatch<SetStateAction<Expiration>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const [expirationError, setExpirationError] = useState<Expiration>({ month: '', year: '' });

  const handleExpirationChange = (field: 'month' | 'year', value: string) => {
    console.log(value);
    let errorMessage = '';
    if (!/^[0-9]*$/.test(value)) {
      errorMessage = '숫자만 입력 가능합니다.';
    }
    if (field === 'month') {
      if (value !== '') {
        const month = Number(value);
        if (month < 1 || month > 12) {
          errorMessage = '1부터 12 사이의 숫자를 입력해주세요.';
        }
      }
    }

    if (field === 'year') {
      if (value !== '' && value.length !== 2) {
        errorMessage = '2자리 숫자를 입력해주세요.';
      }
    }

    setExpiration((prev) => ({
      ...prev,
      [field]: value
    }));

    setExpirationError((prev) => ({
      ...prev,
      [field]: errorMessage
    }));
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

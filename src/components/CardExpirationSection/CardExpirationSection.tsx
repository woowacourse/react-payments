import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction } from 'react';
import { ExpirationType, ExpirationKey } from '../../App';
import Input from '../Input/Input';

type Props = {
  expiration: ExpirationType;
  setExpiration: Dispatch<SetStateAction<ExpirationType>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    const errorMessage = getErrorMessage(field, value);

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
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
            onChange={(e) => handleExpirationChange('month', e.target.value)}
            maxLength={2}
          />
          <Input
            value={expiration.year.value}
            placeholder="YY"
            isError={Boolean(expiration.month.errorMessage)}
            onChange={(e) => handleExpirationChange('year', e.target.value)}
            maxLength={2}
          />
        </div>

        {isError && <InputSection.Error message={expiration.month.errorMessage || expiration.year.errorMessage} />}
      </div>
    </div>
  );
}

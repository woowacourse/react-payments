import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  expiration: string[];
  setExpiration: Dispatch<SetStateAction<string[]>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const [expirationError, setExpirationError] = useState<string[]>(['', '']);

  function validateNumberError(value: string) {
    if (!/^[0-9]*$/.test(value)) {
      return '숫자만 입력 가능합니다.';
    }
  }

  function validateMonthRangeError(value: string) {
    const month = Number(value);
    if (value !== '' && (month < 1 || month > 12)) {
      return '1부터 12 사이의 숫자를 입력해주세요.';
    }
  }

  function validateYearLengthError(value: string) {
    if (value !== '' && value.length !== 2) {
      return '2자리 숫자를 입력해주세요.';
    }
  }

  function getExpirationError(index: number, value: string): string {
    return (
      validateNumberError(value) ||
      (index === 0 && validateMonthRangeError(value)) ||
      (index === 1 && validateYearLengthError(value)) ||
      ''
    );
  }

  const handleExpirationChange = (index: number, value: string) => {
    const updatedExpiration = [...expiration];
    updatedExpiration[index] = value;
    setExpiration(updatedExpiration);

    const errorMsg = getExpirationError(index, value);
    const updatedError = [...expirationError];
    updatedError[index] = errorMsg;
    setExpirationError(updatedError);
  };

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드 유효기간을 입력해 주세요" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="유효기간" />
        <InputSection.InputWrapper
          numbers={expiration}
          onChange={handleExpirationChange}
          valid={expirationError.map((msg) => msg === '')}
          placeholders={['MM', 'YY']}
          maxLength={2}
        />
        <div>{expirationError.map((msg, index) => msg && <InputSection.Error key={index} message={msg} />)}</div>
      </div>
    </div>
  );
}

import styles from './CardExpirationSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  expiration: string[];
  setExpiration: Dispatch<SetStateAction<string[]>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const [expirationError, setExpirationError] = useState<string[]>(['', '']);

  const handleExpirationChange = (index: number, value: string) => {
    let errorMsg = '';
    if (!/^[0-9]*$/.test(value)) {
      errorMsg = '숫자만 입력 가능합니다.';
      return;
    }

    if (index === 0) {
      if (value !== '') {
        const month = Number(value);
        if (month < 1 || month > 12) {
          errorMsg = '1부터 12 사이의 숫자를 입력해주세요.';
        }
      }
    }
    if (index === 1) {
      if (value !== '' && value.length !== 2) {
        errorMsg = '2자리 숫자를 입력해주세요.';
      }
    }

    const updatedExpiration = [...expiration];
    updatedExpiration[index] = value;
    setExpiration(updatedExpiration);

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

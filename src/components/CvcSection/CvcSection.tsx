import { InputSection } from '../InputSection/InputSection';
import styles from './CvcSection.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  cvc: string;
  setCvc: Dispatch<SetStateAction<string>>;
};

export default function CvcSection({ cvc, setCvc }: Props) {
  const [cvcError, setCvcError] = useState<string>('');

  function validateNumberError(value: string) {
    if (!/^[0-9]*$/.test(value)) {
      return '숫자만 입력 가능합니다.';
    }
  }

  function validateCvcLengthError(value: string) {
    if (value !== '' && value.length !== 3) {
      return 'CVC는 3자리여야 합니다.';
    }
  }

  function getCvcError(value: string): string {
    return validateNumberError(value) || validateCvcLengthError(value) || '';
  }

  const handleCvcChange = (value: string) => {
    setCvc(value);

    const errorMsg = getCvcError(value);
    setCvcError(errorMsg);
  };

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="CVC" />
        <InputSection.InputWrapper
          numbers={[cvc]}
          onChange={(_index, value) => handleCvcChange(value)}
          valid={[cvcError === '']}
          placeholders={['123']}
          maxLength={3}
        />
        {cvcError && <InputSection.Error message={cvcError} />}
      </div>
    </div>
  );
}

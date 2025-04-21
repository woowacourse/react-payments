import Input from '../Input/Input';
import { InputSection } from '../InputSection/InputSection';
import styles from './CvcSection.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  cvc: string;
  setCvc: Dispatch<SetStateAction<string>>;
};

export default function CvcSection({ cvc, setCvc }: Props) {
  const [cvcError, setCvcError] = useState<string>('');

  const handleCvcChange = (value: string) => {
    setCvc(value);
    const errorMessage = getCvcErrorMessage(value);
    setCvcError(errorMessage);
  };

  const getCvcErrorMessage = (value: string) => {
    if (!/^[0-9]*$/.test(value)) {
      return '숫자만 입력 가능합니다.';
    }
    if (value !== '' && value.length !== 3) {
      return 'CVC는 3자리여야 합니다.';
    }
    return '';
  };
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="CVC" />

        <Input
          onChange={(e) => handleCvcChange(e.target.value)}
          value={cvc}
          placeholder="123"
          isValid={cvcError == ''}
          maxLength={3}
        />

        {cvcError && <InputSection.Error message={cvcError} />}
      </div>
    </div>
  );
}

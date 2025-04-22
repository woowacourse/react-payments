import { CvcType } from '../../types';
import Input from '../Input/Input';
import { InputSection } from '../InputSection/InputSection';
import styles from './CvcSection.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  cvc: CvcType;
  setCvc: Dispatch<SetStateAction<CvcType>>;
};

export default function CvcSection({ cvc, setCvc }: Props) {
  const handleCvcChange = (value: string) => {
    const errorMessage = getCvcErrorMessage(value);
    setCvc({ errorMessage, value });
  };

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="CVC" />

        <Input onChange={(e) => handleCvcChange(e.target.value)} value={cvc.value} placeholder="123" isError={Boolean(cvc.errorMessage)} maxLength={3} />

        {cvc.errorMessage && <InputSection.Error message={cvc.errorMessage} />}
      </div>
    </div>
  );
}

const getCvcErrorMessage = (value: string) => {
  if (!/^[0-9]*$/.test(value)) {
    return '숫자만 입력 가능합니다.';
  }
  if (value !== '' && value.length !== 3) {
    return 'CVC는 3자리여야 합니다.';
  }
  return '';
};

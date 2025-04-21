import { validateCvcLengthError, validateNumberError } from '../../utils/CardInputValidations';
import { InputSection } from '../common/InputSection/InputSection';
import styles from './CvcSection.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  cvc: string;
  setCvc: Dispatch<SetStateAction<string>>;
};

export default function CvcSection({ cvc, setCvc }: Props) {
  const [cvcError, setCvcError] = useState<Record<'cvc', string>>({ cvc: '' });

  const handleChange = (key: 'cvc', value: string) => {
    setCvc(value);
    const errorMsg = getCvcError(value) || '';
    setCvcError((prev) => ({ ...prev, [key]: errorMsg }));
  };

  function getCvcError(value: string): string {
    return validateNumberError(value) || validateCvcLengthError(value) || '';
  }

  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="CVC" />
        <InputSection.InputWrapper<'cvc'>
          fields={[{ key: 'cvc', value: cvc }]}
          onChange={handleChange}
          valid={{ cvc: cvcError.cvc === '' }}
          placeholders={{ cvc: '123' }}
          maxLength={3}
        />
        {cvcError.cvc && <InputSection.Error message={cvcError.cvc} />}
      </div>
    </div>
  );
}

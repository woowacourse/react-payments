import { validateCvcLengthError, validateNumberError } from '../../utils/cardInputValidations';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';
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
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="CVC 번호를 입력해 주세요" />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="CVC" />
        <InputWrapper<'cvc'>
          fields={[{ key: 'cvc', value: cvc }]}
          onChange={handleChange}
          valid={{ cvc: cvcError.cvc === '' }}
          placeholders={{ cvc: '123' }}
          maxLength={3}
        />
        {cvcError.cvc && <FieldGroup.Error message={cvcError.cvc} />}
      </div>
    </div>
  );
}

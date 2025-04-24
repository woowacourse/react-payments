import { validateNumberError, validatePasswordLengthError } from '../../utils/CardInputValidations';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';
import styles from './CardPasswordSection.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export default function CardPasswordSection({ password, setPassword }: Props) {
  const [passwordError, setPasswordError] = useState<Record<'password', string>>({ password: '' });

  const handleChange = (key: 'password', value: string) => {
    setPassword(value);
    const errorMsg = getPasswordError(value) || '';
    setPasswordError((prev) => ({ ...prev, [key]: errorMsg }));
  };

  function getPasswordError(value: string): string {
    return validateNumberError(value) || validatePasswordLengthError(value) || '';
  }

  return (
    <div className={styles.sectionContainer}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="비밀번호를 입력해 주세요" />
        <FieldGroup.SubTitle title="앞의 2자리를 입력해주세요" />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="비밀번호 앞 2자리" />
        <InputWrapper<'password'>
          fields={[{ key: 'password', value: password }]}
          onChange={handleChange}
          valid={{ password: passwordError.password === '' }}
          placeholders={{ password: '' }}
          maxLength={2}
        />
        {passwordError.password && <FieldGroup.Error message={passwordError.password} />}
      </div>
    </div>
  );
}

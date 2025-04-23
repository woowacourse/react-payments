import styles from './CardExpirationSection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  validateMonthRangeError,
  validateNumberError,
  validateYearLengthError
} from '../../utils/CardInputValidations';
import { Expiration } from '../../types/card';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';

type Props = {
  expiration: Expiration;
  setExpiration: Dispatch<SetStateAction<Expiration>>;
};

export default function CardExpirationSection({ expiration, setExpiration }: Props) {
  const [expirationError, setExpirationError] = useState<Record<keyof Expiration, string>>({
    month: '',
    year: ''
  });

  const handleExpirationChange = (key: keyof Expiration, value: string) => {
    setExpiration({ ...expiration, [key]: value });

    const errorMsg =
      (key === 'month' && validateMonthRangeError(value)) ||
      (key === 'year' && validateYearLengthError(value)) ||
      validateNumberError(value) ||
      '';
    setExpirationError((prev) => ({ ...prev, [key]: errorMsg }));
  };

  return (
    <div className={styles.sectionContainer}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="카드 유효기간을 입력해 주세요" />
        <FieldGroup.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="유효기간" />
        <InputWrapper<'month' | 'year'>
          fields={[
            { key: 'month', value: expiration.month },
            { key: 'year', value: expiration.year }
          ]}
          onChange={handleExpirationChange}
          valid={{ month: expirationError.month === '', year: expirationError.year === '' }}
          placeholders={{ month: 'MM', year: 'YY' }}
          maxLength={2}
        />
        <div>
          {expirationError.month && <FieldGroup.Error message={expirationError.month} />}
          {expirationError.year && <FieldGroup.Error message={expirationError.year} />}
        </div>
      </div>
    </div>
  );
}

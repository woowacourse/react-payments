import styles from './CardExpirationSection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { Expiration } from '../../types/card';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';

type Props = {
  expiration: Expiration;
  handleExpirationChange: (key: keyof Expiration, value: string) => void;
  expirationError: Expiration;
};

export default function CardExpirationSection({ expiration, handleExpirationChange, expirationError }: Props) {
  const hasAnyInput = Object.values(expiration).some((value) => value.length > 0);

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
          valid={{
            month: !expirationError.month,
            year: !expirationError.year
          }}
          placeholders={{ month: 'MM', year: 'YY' }}
          maxLength={2}
        />
        {hasAnyInput && (
          <>
            {expirationError.month && <FieldGroup.Error message={expirationError.month} />}
            {expirationError.year && <FieldGroup.Error message={expirationError.year} />}
          </>
        )}
      </div>
    </div>
  );
}

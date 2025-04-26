import styles from './CardExpirationSection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { CardExpiration } from '../../types/card';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';
import { useRef } from 'react';

type Props = {
  cardExpiration: CardExpiration;
  handleCardExpirationChange: (key: keyof CardExpiration, value: string) => void;
  cardExpirationError: CardExpiration;
};

export default function CardExpirationSection({
  cardExpiration,
  handleCardExpirationChange,
  cardExpirationError
}: Props) {
  const hasAnyInput = Object.values(cardExpiration).some((value) => value.length > 0);

  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, currentField: string) => {
    if (e.key === 'Backspace' && e.currentTarget.value === '') {
      if (currentField === 'month') yearInputRef.current?.focus();
      if (currentField === 'year') monthInputRef.current?.focus();
    }
  };

  const handleKeyChange = (key: keyof CardExpiration, value: string) => {
    handleCardExpirationChange(key, value);

    if (value.length === 2) {
      if (key === 'month') yearInputRef.current?.focus();
      if (key === 'year') monthInputRef.current?.focus();
    }
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
            { key: 'month', value: cardExpiration.month },
            { key: 'year', value: cardExpiration.year }
          ]}
          onChange={handleKeyChange}
          valid={{
            month: !cardExpirationError.month,
            year: !cardExpirationError.year
          }}
          placeholders={{ month: 'MM', year: 'YY' }}
          maxLength={2}
          inputRefs={{
            month: monthInputRef,
            year: yearInputRef
          }}
          onKeyDown={handleKeyDown}
        />
        {hasAnyInput && (
          <>
            {cardExpirationError.month && <FieldGroup.Error message={cardExpirationError.month} />}
            {cardExpirationError.year && <FieldGroup.Error message={cardExpirationError.year} />}
          </>
        )}
      </div>
    </div>
  );
}

import styles from './CardExpirationSection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { CardExpiration } from '../../types/card';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';

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
          onChange={handleCardExpirationChange}
          valid={{
            month: !cardExpirationError.month,
            year: !cardExpirationError.year
          }}
          placeholders={{ month: 'MM', year: 'YY' }}
          maxLength={2}
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

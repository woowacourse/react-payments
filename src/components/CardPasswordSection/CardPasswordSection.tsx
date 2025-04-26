import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';
import styles from './CardPasswordSection.module.css';

type Props = {
  cardPassword: string;
  handleCardPasswordChange: (key: string, value: string) => void;
  cardPasswordError: string;
};

export default function CardPasswordSection({ cardPassword, handleCardPasswordChange, cardPasswordError }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="비밀번호를 입력해 주세요" />
        <FieldGroup.SubTitle title="앞의 2자리를 입력해주세요" />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="비밀번호 앞 2자리" />
        <InputWrapper<'cardPassword'>
          fields={[{ key: 'cardPassword', value: cardPassword }]}
          onChange={handleCardPasswordChange}
          valid={{ cardPassword: cardPasswordError === '' }}
          placeholders={{ cardPassword: '' }}
          maxLength={2}
        />
        {cardPasswordError && <FieldGroup.Error message={cardPasswordError} />}
      </div>
    </div>
  );
}

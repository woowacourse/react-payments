import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';
import styles from './CvcSection.module.css';

type Props = {
  cvc: string;
  handleCvcChange: (key: string, value: string) => void;
  cvcError: string;
};

export default function CvcSection({ cvc, handleCvcChange, cvcError }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="CVC 번호를 입력해 주세요" />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="CVC" />
        <InputWrapper<'cvc'>
          fields={[{ key: 'cvc', value: cvc }]}
          onChange={handleCvcChange}
          valid={{ cvc: cvcError === '' }}
          placeholders={{ cvc: '123' }}
          maxLength={3}
        />
        {cvcError && <FieldGroup.Error message={cvcError} />}
      </div>
    </div>
  );
}

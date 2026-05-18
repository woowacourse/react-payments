import styles from './BankSelectField.module.css';

import { Field } from '@/core/components/field/Field';
import { BANK_RULES, BANKS, type Bank } from '@/entities/card/model/bank';

export interface BankFieldControl {
  bank: Bank | undefined;
  shouldComplete: (value: Bank) => boolean;
  onChange: (v: Bank) => void;
}
export interface BankSelectFieldProps extends BankFieldControl {
  setStepRef: (node: HTMLSelectElement | null) => void;
  onComplete: () => void;
}

export const BankSelectField = ({
  bank,
  onChange,
  shouldComplete,
  setStepRef,
  onComplete,
}: BankSelectFieldProps) => {
  const handleChange = (value: Bank) => {
    onChange(value);

    if (shouldComplete(value)) {
      onComplete();
    }
  };
  return (
    <Field title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.container}>
        <select
          ref={setStepRef}
          className={styles.button}
          value={bank ?? ''}
          onChange={(e) => handleChange(e.target.value as Bank)}
        >
          <option value="" disabled>
            카드사를 선택해 주세요
          </option>
          {BANKS.map((banks) => (
            <option key={banks} value={banks}>
              {BANK_RULES[banks].label}
            </option>
          ))}
        </select>
      </div>
    </Field>
  );
};

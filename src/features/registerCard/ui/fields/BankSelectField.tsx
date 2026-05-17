import styles from './BankSelectField.module.css';

import { Field } from '@/core/components/field/Field';
import { BANK_RULES, BANKS, type Bank } from '@/entities/card/model/bank';

export interface BankFieldControl {
  bank: Bank | undefined;
  onChange: (v: Bank | undefined) => void;
}
export interface BankSelectFieldProps {
  bankField: BankFieldControl;
  setStepRef: (node: HTMLSelectElement | null) => void;
  onComplate: () => void;
}
export const BankSelectField = ({ bankField, setStepRef, onComplate }: BankSelectFieldProps) => {
  const { bank, onChange } = bankField;
  const handleChange = (value: Bank) => {
    onChange(value);
    if (value !== undefined) onComplate();
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

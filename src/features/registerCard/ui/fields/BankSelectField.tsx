import styles from './BankSelectField.module.css';

import { Field } from '@/core/components/field/Field';
import { BANK_RULES, BANKS, type Bank } from '@/entities/card/bank/bank';
import type { FieldControl } from './types';
export interface BankSelectFieldProps {
  bankField: FieldControl;
  setStepRef: (node: HTMLSelectElement | null) => void;
  onComplate: () => void;
}
export const BankSelectField = ({ bankField, setStepRef, onComplate }: BankSelectFieldProps) => {
  const { value, handleChange } = bankField;
  const handleChangeBank = (value: string) => {
    handleChange(value);
    if (value !== '') onComplate();
  };
  return (
    <Field title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.container}>
        <select
          ref={setStepRef}
          className={styles.button}
          value={value ?? ''}
          onChange={(e) => handleChangeBank(e.target.value as Bank)}
        >
          {' '}
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

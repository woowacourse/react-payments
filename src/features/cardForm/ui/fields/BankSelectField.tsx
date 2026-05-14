import styles from './BankSelectField.module.css';

import { Field } from '@/core/components/field/Field';
import { BANK_RULES, BANKS, type Bank } from '@/entities/card/bank/bank';
import type { UseBankResult } from '../../hooks/useBank';

interface BankSelectFieldProps {
  bank: UseBankResult;
  setStepRef: (node: HTMLSelectElement | null) => void;
}

export const BankSelectField = ({ bank, setStepRef }: BankSelectFieldProps) => {
  return (
    <Field title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.container}>
        <select
          ref={(node) => setStepRef(node)}
          className={styles.button}
          value={bank.value ?? ''}
          onChange={(e) => bank.handleChange(e.target.value as Bank)}
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

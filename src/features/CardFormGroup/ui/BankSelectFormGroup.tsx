import styles from './BankSelectFormGroup.module.css';

import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { BANK_RULES, BANKS, type Bank } from '@/entities/card/bank/bank';
import type { UseBankResult } from '../hooks/useBank';

interface BankSelectFormGroupProps {
  bank: UseBankResult;
  setStepRef: (node: HTMLSelectElement | null) => void;
}

export const BankSelectFormGroup = ({ bank, setStepRef }: BankSelectFormGroupProps) => {
  return (
    <FormGroup title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.container}>
        <select
          ref={(node) => setStepRef(node)}
          className={styles.button}
<<<<<<< HEAD
          value={bank.value ?? ''}
          onChange={(e) => bank.handleChange(e.target.value as Bank)}
        >
          {' '}
          <option value="" disabled>
            카드사를 선택해 주세요
          </option>
=======
          value={bank.value}
          onChange={(e) => bank.handleChange(e.target.value as Bank)}
        >
>>>>>>> 6ea3eafb075d299cabe06cd4eac14b5d686759c2
          {BANKS.map((banks) => (
            <option key={banks} value={banks}>
              {BANK_RULES[banks].label}
            </option>
          ))}
        </select>
      </div>
    </FormGroup>
  );
};

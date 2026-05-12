import styles from './BankSelectFormGroup.module.css';

import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { BANK_CONFIG, BANKS, type Bank } from '@/entities/card/bank/bank';
import type { UseBankResult } from '../hooks/useBank';

interface BankSelectFormGroupProps {
  bank: UseBankResult;
  setStepRef: (node: HTMLSelectElement | null) => void;
}

export const BankSelectFormGroup = ({ bank, setStepRef }: BankSelectFormGroupProps) => {
  const { value, handleChange } = bank;

  return (
    <FormGroup title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.container}>
        <select
          ref={setStepRef}
          className={styles.button}
          value={value}
          onChange={(e) => handleChange(e.target.value as Bank)}
        >
          {BANKS.map((bank) => (
            <option key={bank} value={bank}>
              {BANK_CONFIG[bank].label}
            </option>
          ))}
        </select>
      </div>
    </FormGroup>
  );
};

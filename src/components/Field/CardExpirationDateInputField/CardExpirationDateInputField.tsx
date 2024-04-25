import { ChangeEvent, useEffect, useRef } from 'react';
import { DATE_PLACEHOLDER } from '../../../constants/input';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import { Date, DateItem } from '../../../types/date';

type CardExpirationDateInputField = {
  expirationDate: Date;
  handleExpirationDateChange: (item: DateItem) => (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessages: string[];
};

export default function CardExpirationDateInputField({
  expirationDate,
  handleExpirationDateChange,
  errorMessages,
}: CardExpirationDateInputField) {
  const inputRefs = useRef<HTMLInputElement[] | null[]>([]);

  useEffect(() => {
    if (expirationDate.month.length >= 2) inputRefs.current[1]?.focus();
  }, [expirationDate]);

  return (
    <>
      <div className={styles.label}>유효기간</div>
      <div className={styles.horizon__gap__container}>
        <Input
          ref={(e) => (inputRefs.current[0] = e)}
          onChange={handleExpirationDateChange('month')}
          placeholder={DATE_PLACEHOLDER.MONTH}
          maxLength={2}
          value={expirationDate.month}
          isError={errorMessages[0] !== ''}
        />
        <Input
          ref={(e) => (inputRefs.current[1] = e)}
          onChange={handleExpirationDateChange('year')}
          placeholder={DATE_PLACEHOLDER.YEAR}
          maxLength={2}
          value={expirationDate.year}
          isError={errorMessages[1] !== ''}
        />
      </div>
      {errorMessages.some((errorMessage) => errorMessage !== '') && (
        <div className={styles.error_message}>{errorMessages.find((errorMessage) => errorMessage !== '')}</div>
      )}
    </>
  );
}

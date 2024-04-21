import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { DATE_PLACEHOLDER } from '../../../constants/input';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import { checkExpired, checkValidMonth, checkValidYear } from '../../../utils/checkDate';

export default function CardExpirationDateInputField({
  date,
  setDate,
}: {
  date: Record<string, string>;
  setDate: Dispatch<SetStateAction<Record<string, string>>>;
}) {
  const [errorMessages, setErrorMessages] = useState(new Array(Object.keys(date).length).fill(''));

  // 여긴 최신 오류 순서가 아닌 0부터 시작함..
  const checkValidDate = ({ month = date.month, year = date.year }: { month?: string; year?: string }) => {
    const isExpiredDate = checkExpired(month, year);

    const monthErrorMessage = checkValidMonth(month, isExpiredDate);
    const yearErrorMessage = checkValidYear(year, isExpiredDate);

    setErrorMessages([monthErrorMessage, yearErrorMessage]);
  };

  const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const month = Number(e.target.value);

    if (month <= 1 || e.target.value.length >= 2) setDate({ ...date, month: e.target.value });
    else if (month >= 2 && month <= 9) setDate({ ...date, month: e.target.value.padStart(2, '0') });

    checkValidDate({ month: e.target.value });
  };

  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, year: e.target.value });
    checkValidDate({ year: e.target.value });
  };

  return (
    <>
      <div className={styles.label}>유효기간</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleMonth}
          placeholder={DATE_PLACEHOLDER.MONTH}
          maxLength={2}
          value={date.month}
          isError={errorMessages[0] !== ''}
        />
        <Input
          onChange={handleYear}
          placeholder={DATE_PLACEHOLDER.YEAR}
          maxLength={2}
          value={date.year}
          isError={errorMessages[1] !== ''}
        />
      </div>
      {errorMessages.some((errorMessage) => errorMessage !== '') && (
        <div className={styles.error_message}>{errorMessages.find((errorMessage) => errorMessage !== '')}</div>
      )}
    </>
  );
}

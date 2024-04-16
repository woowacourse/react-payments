import React, { useState } from 'react';
import Input from '../common/Input';
import styles from './ExpirationDateInput.module.css';

interface ExpirationDate {
  month: string;
  year: string;
}

const ExpirationDateInput = () => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: '',
    year: '',
  });
  const [isError, setIsError] = useState<Record<string, boolean>>({
    month: false,
    year: false,
  });

  const [errMsg, setErrMsg] = useState('');

  const isInteger = (name: string, value: string) =>
    Number.isInteger(Number(value));

  const hasTwoDigit = (value: string) => value.length === 2;

  const isValidateMonth = (value: string) =>
    1 <= Number(value) && Number(value) <= 12;

  const isValidateDate = () => {
    const currentDate = new Date();

    const { year, month } = expirationDate;
    const inputDate = new Date(Number(year) + 2000, Number(month));

    return inputDate > currentDate;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (isInteger(name, value)) {
      setErrMsg('');
      setExpirationDate({ ...expirationDate, [name]: value });
    } else {
      setErrMsg('숫자만 입력 가능합니다.');
    }
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (!hasTwoDigit(value)) {
      setErrMsg('2자리 숫자를 입력해 주세요.');
      setIsError({ ...isError, [name]: true });
      return;
    }

    if (name === 'month' && !isValidateMonth(value)) {
      setErrMsg('1에서 12사이의 숫자를 입력해 주세요.');
      setIsError({ ...isError, [name]: true });
      return;
    }

    console.log(isValidateDate());

    if (!isValidateDate()) {
      setErrMsg('만료된 카드는 사용할 수 없습니다');
      setIsError({ ...isError, [name]: true });
      return;
    }

    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <div className={styles.container}>
      <p>결제할 카드 번호를 입력해 주세요</p>
      <p>월/년도(MMYY)를 순서대로 입력해 주세요.</p>
      <Input
        name="month"
        placeholder="MM"
        value={expirationDate.month}
        isError={isError.month}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={2}
      ></Input>
      <Input
        name="year"
        placeholder="YY"
        value={expirationDate.year}
        isError={isError.year}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={2}
      ></Input>
      <p>{errMsg}</p>
    </div>
  );
};

export default ExpirationDateInput;

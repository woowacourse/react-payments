import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Field from '../common/Field/Field';

interface ExpirationDate {
  month: string;
  year: string;
}

interface ExpirationDateInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const ExpirationDateInput = ({ setCardData }: ExpirationDateInputProps) => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: '',
    year: '',
  });
  const [isError, setIsError] = useState<Record<string, boolean>>({
    month: false,
    year: false,
  });

  const [errMsg, setErrMsg] = useState('');

  const isInteger = (value: string) => Number.isInteger(Number(value));

  const hasTwoDigit = (value: string) => value.length === 2;

  const isValidateMonth = (value: string) =>
    1 <= Number(value) && Number(value) <= 12;

  const isValidateDate = () => {
    const { year, month } = expirationDate;
    if (year === '') return true;

    const currentDate = new Date();
    const inputDate = new Date(Number(year) + 2000, Number(month));

    return inputDate > currentDate;
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!isInteger(value)) {
      setErrMsg('숫자만 입력 가능합니다.');
      setIsError({ ...isError, [name]: true });

      return;
    }
    setErrMsg('');
    setIsError({ ...isError, [name]: false });

    setExpirationDate({ ...expirationDate, [name]: value });
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCardData('expirationDate', Object.values(expirationDate));

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

    if (!isValidateDate()) {
      setErrMsg('만료된 카드는 사용할 수 없습니다');
      setIsError({ ...isError, [name]: true });
      return;
    }

    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <Field
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요"
      labelText="유효기간"
      errMsg={errMsg}
    >
      {Object.keys(expirationDate).map((name) => (
        <Input
          key={name}
          name={name as keyof ExpirationDate}
          placeholder={name === 'month' ? 'MM' : 'YY'}
          value={expirationDate[name as keyof ExpirationDate]}
          isError={isError[name as keyof ExpirationDate]}
          handleChange={onChange}
          handleOnBlur={onBlur}
          maxLength={2}
        ></Input>
      ))}
    </Field>
  );
};

export default ExpirationDateInput;

import React, { useState } from 'react';

import Input from '../common/Input/Input';
import Field from '../layout/Field/Field';

import { ERRORS, ADD_CARD_FORM_FIELDS } from '../../constants/messages';

interface ExpirationDate {
  month: string;
  year: string;
}

interface ExpirationDateInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const { EXPIRATION_DATE } = ADD_CARD_FORM_FIELDS;

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
      setErrMsg(ERRORS.isNotInteger);
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
      setErrMsg(ERRORS.isNotTwoDigit);
      setIsError({ ...isError, [name]: true });
      return;
    }

    if (name === 'month' && !isValidateMonth(value)) {
      setErrMsg(ERRORS.inValidMonth);
      setIsError({ ...isError, [name]: true });
      return;
    }

    if (!isValidateDate()) {
      setErrMsg(ERRORS.deprecatedCard);
      setIsError({ ...isError, [name]: true });
      return;
    }

    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <Field
      title={EXPIRATION_DATE.title}
      description={EXPIRATION_DATE.description}
      labelText={EXPIRATION_DATE.labelText}
      errMsg={errMsg}
    >
      {Object.keys(expirationDate).map((name) => (
        <Input
          key={name}
          name={name as keyof ExpirationDate}
          placeholder={
            name === 'month'
              ? EXPIRATION_DATE.placeholder.month
              : EXPIRATION_DATE.placeholder.year
          }
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

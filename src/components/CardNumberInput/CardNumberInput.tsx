import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Field from '../common/Field/Field';
import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';

interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface CardNumberInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const { isNotInteger, isNotFourDigit } = ERRORS;
const { CARD_NUMBER } = ADD_CARD_FORM_FIELDS;

export default function CardNumberInput({ setCardData }: CardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [isError, setIsError] = useState<Record<keyof CardNumbers, boolean>>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const [errMsg, setErrMsg] = useState('');

  const isInteger = (value: string) => {
    return Number.isInteger(Number(value));
  };

  const hasFourDigit = (value: string) => {
    return value.length === 4;
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (!isInteger(value)) {
      setErrMsg(isNotInteger);
      setIsError({ ...isError, [name]: true });
      return;
    }
    setErrMsg('');
    setIsError({ ...isError, [name]: false });

    setCardNumbers({ ...cardNumbers, [name]: value });
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCardData('cardNumbers', Object.values(cardNumbers));

    if (!hasFourDigit(value)) {
      setErrMsg(isNotFourDigit);
      setIsError({ ...isError, [name]: true });
      return;
    }
    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <Field
      title={CARD_NUMBER.title}
      description={CARD_NUMBER.description}
      labelText={CARD_NUMBER.labelText}
      errMsg={errMsg}
    >
      {Object.keys(cardNumbers).map((name) => (
        <Input
          key={name}
          name={name as keyof CardNumbers}
          placeholder={CARD_NUMBER.placeholder}
          value={cardNumbers[name as keyof CardNumbers]}
          isError={isError[name as keyof CardNumbers]}
          handleChange={onChange}
          handleOnBlur={onBlur}
          maxLength={4}
        ></Input>
      ))}
    </Field>
  );
}

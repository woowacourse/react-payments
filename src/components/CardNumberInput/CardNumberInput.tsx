import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Field from '../common/Field/Field';

interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface CardNumberInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

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
      setErrMsg('숫자만 입력 가능합니다.');
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
      setErrMsg('4자리 숫자를 입력해 주세요.');
      setIsError({ ...isError, [name]: true });
      return;
    }
    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <Field
      title="결제할 카드 번호를 입력해 주세요"
      description="본인 명의의 카드만 결제 가능합니다."
      labelText="카드 번호"
      errMsg={errMsg}
    >
      {Object.keys(cardNumbers).map((name) => (
        <Input
          key={name}
          name={name as keyof CardNumbers}
          placeholder="1234"
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

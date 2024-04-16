import React, { useState } from 'react';
import Input from '../common/Input';
import styles from './CardNumberInput.module.css';

interface CardNumbers {
  first: '';
  second: '';
  third: '';
  fourth: '';
}

export default function CardNumberInput() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [isError, setIsError] = useState<Record<string, boolean>>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const [errMsg, setErrMsg] = useState('');

  const isInteger = (name: string, value: string) => {
    return Number.isInteger(Number(value));
  };

  const hasFourDigit = (value: string) => {
    return value.length === 4;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (isInteger(name, value)) {
      setErrMsg('');
      setCardNumbers({ ...cardNumbers, [name]: value });
    } else {
      setErrMsg('숫자만 입력 가능합니다.');
    }
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (!hasFourDigit(value)) {
      setErrMsg('4자리 숫자를 입력해 주세요.');
      setIsError({ ...isError, [name]: true });
      return;
    }
    setIsError({ ...isError, [name]: false });
    setErrMsg('');
  };

  return (
    <div className={styles.container}>
      <p>결제할 카드 번호를 입력해 주세요</p>
      <p>본인 명의의 카드만 결제 가능합니다.</p>
      <Input
        name="first"
        placeholder="1234"
        value={cardNumbers.first}
        isError={isError.first}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={4}
      ></Input>
      <Input
        name="second"
        placeholder="1234"
        value={cardNumbers.second}
        isError={isError.second}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={4}
      ></Input>
      <Input
        name="third"
        placeholder="1234"
        value={cardNumbers.third}
        isError={isError.third}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={4}
      ></Input>
      <Input
        name="fourth"
        placeholder="1234"
        value={cardNumbers.fourth}
        isError={isError.fourth}
        handleChange={handleChange}
        handleOnBlur={handleOnBlur}
        maxLength={4}
      ></Input>
      <p>{errMsg}</p>
    </div>
  );
}

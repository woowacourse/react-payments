import React, { ChangeEvent, useState } from 'react';

import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import Input from '../Input';

const NUMBERS_NAME_PREFIX = 'numbers_';

export default function CardNumbersForm() {
  const [validatedNumbers, setValidatedNumbers] = useState<boolean[]>(
    Array.from({ length: 4 }, () => false),
  );

  const validateCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));
    const regex = /^[0-9]{4}$/;

    // TODO: 함수로 빼기
    setValidatedNumbers((prev) => {
      prev.splice(index, 1, regex.test(value));
      return JSON.parse(JSON.stringify(prev));
    });
  };

  return (
    <CardInputFormContainer
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
    >
      <CardInputForm label="카드 번호">
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <Input
              placeholder="1234"
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              type="text"
              maxLength={4}
              extraHandleChange={validateCardNumber}
            />
          ))}
        </>
      </CardInputForm>
      <div>
        {validatedNumbers.some((i) => !i) && '4자리 숫자만 입력 가능합니다.'}
      </div>
    </CardInputFormContainer>
  );
}

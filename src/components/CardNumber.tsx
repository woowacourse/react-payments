import React, { useState } from "react";
import Input from "./common/Input";
import styled, { css } from "styled-components";
import FormLabel from "./common/FormLabel";
import ErrorSpan from "./common/ErrorSpan";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";

interface CardNumberObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

function CardNumber() {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [cardError, setCardError] = useState({
    isError: false,
    message: "",
  });

  const cardChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;
    const name = event.currentTarget.dataset["order"] as keyof CardNumberObj;

    if (!name) return;

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      if (value.length !== 4) {
        throw new Error(`4글자를 입력해 주세요`);
      }

      setCardError({
        isError: false,
        message: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        setCardError({
          isError: true,
          message: error.message,
        });
      }
    } finally {
      setCardNumber((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <CardNumberInputContainer>
        <Input
          data-order="first"
          value={cardNumber["first"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>
        <Input
          data-order="second"
          value={cardNumber["second"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>

        <Input
          data-order="third"
          value={cardNumber["third"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={"password"}
        />
        <p>-</p>

        <Input
          data-order="fourth"
          value={cardNumber["fourth"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={"password"}
        />
      </CardNumberInputContainer>
      {cardError?.isError && <ErrorSpan>{cardError?.message}</ErrorSpan>}
    </div>
  );
}

export default CardNumber;

const CardNumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 318px;
`;

const CardNumberInput = css`
  width: 60px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
`;

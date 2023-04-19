import React, { useState } from "react";
import Input from "./common/Input";
import styled, { css } from "styled-components";
import FormLabel from "./common/FormLabel";
import ErrorSpan from "./common/ErrorSpan";

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
    const name = event.currentTarget.dataset["setOrder"] as
      | "first"
      | "second"
      | "third"
      | "fourth";

    if (!name) return;

    if (!/\d/g.test(value)) return;

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
          data-set-order="first"
          value={cardNumber["first"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>
        <Input
          data-set-order="second"
          value={cardNumber["second"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>

        <Input
          data-set-order="third"
          value={cardNumber["third"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={"password"}
        />
        <p>-</p>

        <Input
          data-set-order="fourth"
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

import React, { useState } from "react";
import Input from "src/components/Input";
import styled, { css } from "styled-components";

interface CardNumberObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardNumberProps {
  label: string;
  // cardNumber: CardNumberObj;
  // setCardNumber: React.Dispatch<React.SetStateAction<CardNumberObj>>;
}

function CardNumber({ label }: CardNumberProps) {
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
    const name = event.currentTarget.dataset["setOrder"];

    console.log(event.currentTarget, "2");
    if (!name) return;

    if (![...value].every((val) => /[0-9]/.test(val))) {
      setCardError({
        isError: true,
        message: "숫자만 입력해 주세요",
      });
    } else {
      setCardError({
        isError: false,
        message: "",
      });
    }
    setCardNumber((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <label>{label}</label>
      <CardNumberInputContainer>
        <Input
          data-set-order="first"
          value={cardNumber["first"]}
          onChange={cardChange}
          maxLength={4}
          customModalStyle={CardNumberInput}
        />
        -
        <Input
          data-set-order="second"
          value={cardNumber["second"]}
          onChange={cardChange}
          maxLength={4}
          customModalStyle={CardNumberInput}
        />
        -
        <Input
          data-set-order="third"
          value={cardNumber["third"]}
          onChange={cardChange}
          maxLength={4}
          customModalStyle={CardNumberInput}
          type={"password"}
        />
        -
        <Input
          data-set-order="fourth"
          value={cardNumber["fourth"]}
          onChange={cardChange}
          maxLength={4}
          customModalStyle={CardNumberInput}
          type={"password"}
        />
      </CardNumberInputContainer>
      {cardError?.isError && (
        <ErrorParagraph>{cardError?.message}</ErrorParagraph>
      )}
    </div>
  );
}

export default CardNumber;

const CardNumberInputContainer = styled.div`
  display: flex;
  width: 318px;
`;

const CardNumberInput = css`
  width: 70px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 18px;
`;

const ErrorParagraph = styled.p`
  color: red;
`;

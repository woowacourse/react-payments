import React, { forwardRef, useState, useContext, useMemo } from "react";
import Input from "src/components/@common/Input";
import styled, { css } from "styled-components";
import FormLabel from "src/components/@common/FormLabel";
import ErrorSpan from "src/components/@common/ErrorSpan";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { InputValuesContext } from "../Main";

export interface CardNumberObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface Props {}

export const CardNumber = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const [cardInput, setCardInput] = useContext(InputValuesContext);

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
      if (!setCardInput) return;
      setCardInput((prev) => ({
        ...prev,
        cardNumbers: { ...prev.cardNumbers, [name]: value },
      }));
    }
  };

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <CardNumberInputContainer ref={ref}>
        <Input
          data-order="first"
          value={cardInput.cardNumbers["first"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>
        <Input
          data-order="second"
          value={cardInput.cardNumbers["second"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
        />
        <p>-</p>

        <Input
          data-order="third"
          value={cardInput.cardNumbers["third"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={"password"}
          placeholder="●●●●"
        />
        <p>-</p>

        <Input
          data-order="fourth"
          value={cardInput.cardNumbers["fourth"]}
          onChange={cardChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={"password"}
          placeholder="●●●●"
        />
      </CardNumberInputContainer>
      {cardError?.isError && <ErrorSpan>{cardError?.message}</ErrorSpan>}
    </div>
  );
});

const CardNumberInputContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  width: 100%;
  height: 45px;

  border-radius: 7px;
  background-color: #ecebf1;
  padding: 0 10px;
`;

const CardNumberInput = css`
  width: 60px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
`;

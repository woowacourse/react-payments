import styled from "styled-components";

import { useEffect, useState } from "react";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { LabelOption } from "../type/input";
import { LABEL, PLACEHOLDER } from "../constants/inputInfo";
import { useInputNumber } from "../hooks/useInputNumber";
import { useError } from "../hooks/useError";
import { validation } from "../validation";

export function CardNumber() {
  const { cardNumber, handleChange } = useInputNumber();
  const { error, handleError } = useError();

  return (
    <Wrapper>
      <InputBox type={"NUMBER"} error={error}>
        <Input handleChange={handleChange} name={"first"} maxLength={4} />
        -
        <Input handleChange={handleChange} name={"second"} maxLength={4} />
        -
        <Input
          handleChange={handleChange}
          name="third"
          type="password"
          maxLength={4}
        />
        -
        <Input
          handleChange={handleChange}
          handleError={() =>
            handleError(Object.values(cardNumber).join(""), validation.isNumber)
          }
          name="fourth"
          type="password"
          maxLength={4}
        />
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 31.8rem;
`;

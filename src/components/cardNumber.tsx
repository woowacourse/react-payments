import styled from "styled-components";

import { useEffect, useState } from "react";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { LabelOption, LABEL, PLACEHOLDER } from "../constants/inputInfo";

export function CardNumber() {
  const [cardNumber, setCardNumber] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setCardNumber(target.value);
  }

  return (
    <div style={{ width: "31.8rem" }} id="wrapper">
      <InputBox type={"NUMBER"}>
        <Input handleChange={handleChange}></Input>
        <Input handleChange={handleChange}></Input>
        <Input handleChange={handleChange}></Input>
        <Input handleChange={handleChange}></Input>
      </InputBox>
    </div>
  );
}

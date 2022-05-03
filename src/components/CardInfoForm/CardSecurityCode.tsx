import React from "react";
import type { InputChangeFunction } from "types";
import { Validation } from "types/cardInfo";

import CVCImage from "../../assets/cvcImage.png";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import Tooltip from "../common/Tooltip";

interface CardSecurityProps {
  securityCode: string;
  onChange: InputChangeFunction;
  validation: Validation;
  inputs: HTMLInputElement[];
}

export default function CardSecurityCode({
  securityCode,
  onChange,
  validation,
  inputs,
}: CardSecurityProps) {
  return (
    <InputContainer title="보안 코드(CVC/CVV)" validation={validation}>
      <div className="input-box w-25">
        <Input
          type="password"
          value={securityCode || ""}
          onChange={onChange}
          maxLength={3}
          name="securityCode"
          inputs={inputs}
        />
        <Tooltip>
          <img width="160px" src={CVCImage} alt="cvc" />
        </Tooltip>
      </div>
    </InputContainer>
  );
}

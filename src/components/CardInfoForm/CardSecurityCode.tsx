import React from "react";

import CVC from "../../assets/cvcImage.png";
import type { InputChangeFunction } from "../../types";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import Tooltip from "../common/Tooltip";

interface CardSecurityProps {
  securityCode: string;
  onChange: InputChangeFunction;
  isValid: boolean;
}

export default function CardSecurityCode({ securityCode, onChange, isValid }: CardSecurityProps) {
  return (
    <InputContainer title="보안 코드(CVC/CVV)" isValid={isValid}>
      <div className="input-box w-25">
        <Input
          type="password"
          value={securityCode || ""}
          onChange={onChange}
          maxLength={3}
          name="securityCode"
          formSelector="#card-info-form"
        />
        <Tooltip>
          <img width="160px" src={CVC} alt="cvc" />
        </Tooltip>
      </div>
    </InputContainer>
  );
}

import React from "react";

import CVCImage from "../../assets/cvcImage.png";
import type { InputChangeFunction } from "../../types";
import { Validation } from "../../types/cardInfo";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import Tooltip from "../common/Tooltip";

interface CardSecurityProps {
  securityCode: string;
  onChange: InputChangeFunction;
  validation: Validation;
}

export default function CardSecurityCode({
  securityCode,
  onChange,
  validation,
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
          formSelector="#card-info-form"
        />
        <Tooltip>
          <img width="160px" src={CVCImage} alt="cvc" />
        </Tooltip>
      </div>
    </InputContainer>
  );
}

import CVCImage from "assets/cvcImage.png";
import Input from "components/common/Input";
import InputContainer from "components/common/InputContainer";
import Tooltip from "components/common/Tooltip";
import React from "react";
import type { InputChangeFunction } from "types";
import { Validation } from "types/cardInfo";

interface CardSecurityProps {
  securityCode: string;
  onChange: InputChangeFunction;
  validation: Validation;
  inputs: HTMLInputElement[];
}

function CardSecurityCode({ securityCode, onChange, validation, inputs }: CardSecurityProps) {
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

export default React.memo(CardSecurityCode);

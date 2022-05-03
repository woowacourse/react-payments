import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

import CVCImage from "../../assets/cvcImage.png";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import Tooltip from "../common/Tooltip";

export default function CardSecurityCode({ inputs }: { inputs: HTMLInputElement[] }) {
  const {
    cardInfo: { securityCode },
    cardInfoValidation: { securityCode: validation },
    onChangeSecurityCode: onChange,
  } = useContext(CardInfoContext);

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

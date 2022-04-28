import React, { useState } from "react";

import CVC from "../../assets/cvcImage.png";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

export default function SecurityCode({ securityCode, onChange, isValid }) {
  const [isCvcShown, setIsCvcShown] = useState(false);

  return (
    <InputContainer inputTitle="보안 코드(CVC/CVV)" isValid={isValid}>
      <Input
        type="password"
        size="small"
        value={securityCode || ""}
        onChange={onChange}
        maxLength={3}
        name="securityCode"
      />
      <div className="cvc-container">
        <span
          className="cvc-guide"
          onMouseEnter={() => setIsCvcShown(true)}
          onMouseLeave={() => setIsCvcShown(false)}
        >
          ?
        </span>
        {isCvcShown && <img className="cvc-image" src={CVC} alt="cvc" />}
      </div>
    </InputContainer>
  );
}

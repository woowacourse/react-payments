import React, { useState } from "react";

import CVC from "../../assets/cvcImage.png";
import Input from "../../elements/Input";

export default function SecurityCode({ securityCode, onChange }) {
  const [isCvcShown, setIsCvcShown] = useState(false);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input
        type="password"
        width="w-25"
        value={securityCode || ""}
        onChange={onChange}
        maxLength={3}
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
    </div>
  );
}

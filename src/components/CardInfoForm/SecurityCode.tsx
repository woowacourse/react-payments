import React from "react";

import Input from "../../elements/Input";

export default function SecurityCode({ securityCode, onChange }) {
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
    </div>
  );
}

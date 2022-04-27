import React from "react";

import Input from "../../elements/Input";

export default function CardPassword({ password, onChange }) {
  return (
    <div className="input-container password-input-container">
      <span className="input-title">카드 비밀번호</span>
      <Input
        type="password"
        width="w-15"
        value={password[0] || ""}
        onChange={e => onChange(e, 0)}
        maxLength={1}
      />
      <Input
        type="password"
        width="w-15"
        value={password[1] || ""}
        onChange={e => onChange(e, 1)}
        maxLength={1}
      />
      <input
        className="input-basic rest-password-box w-15"
        type="password"
        value={1}
        maxLength={1}
        readOnly
      />
      <input
        className="input-basic rest-password-box w-15"
        type="password"
        value={1}
        maxLength={1}
        readOnly
      />
    </div>
  );
}

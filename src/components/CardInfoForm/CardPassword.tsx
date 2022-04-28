import React from "react";

import Input from "../../elements/Input";

export default function CardPassword({ password, onChange }) {
  return (
    <div className="input-container password-input-container">
      <span className="input-title">카드 비밀번호</span>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={0}
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={1}
      />
      <input
        className="input-basic rest-password-box w-15"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
      <input
        className="input-basic rest-password-box w-15"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
    </div>
  );
}

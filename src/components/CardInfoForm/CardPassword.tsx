import React from "react";

import Input from "../../elements/Input";

export default function CardPassword({ password, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <Input
        type="password"
        width="w-15"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
      />
      <Input
        type="password"
        width="w-15"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
      />
      {/* <input className="input-basic w-15" type="password" /> */}
      {/* <input className="input-basic w-15" type="password" /> */}
    </div>
  );
}

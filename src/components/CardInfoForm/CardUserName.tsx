import React from "react";

import Input from "../../elements/Input";

export default function CardUserName({ cardUserName, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <Input type="text" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </div>
  );
}

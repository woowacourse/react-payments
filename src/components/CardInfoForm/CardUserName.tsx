import React from "react";

import { MAX_USER_NAME_LENGTH } from "../../contants";
import Input from "../../elements/Input";

export default function CardUserName({ cardUserName, onChange, onBlur }) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span>
          {cardUserName.length}/{MAX_USER_NAME_LENGTH}
        </span>
      </div>
      <Input
        value={cardUserName}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={onChange}
        maxLength={MAX_USER_NAME_LENGTH}
        onBlur={onBlur}
        name="userName"
      />
    </div>
  );
}

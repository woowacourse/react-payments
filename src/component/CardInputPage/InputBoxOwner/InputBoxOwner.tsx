import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxOwner.css";

export default function InputBoxOwner() {
  const [error, setError] = useState(true);
  const [nameLength, setNameLength] = useState(0);

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setNameLength(event.target.value.trim().length);
  };

  return (
    <div className="input-box-card-owner">
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/30</p>
      <Input
        className="input-card-owner"
        type="text"
        onChange={onChangeCallback}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
      ></Input>
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}

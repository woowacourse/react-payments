import { useState } from "react";
import Input from "../../common/Input";

export default function InputBoxOwner() {
  const [error, setError] = useState(false);
  const [nameLength, setNameLength] = useState(0);

  return (
    <div>
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/30</p>
      <Input
        type="text"
        onChange={() => {}}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
      ></Input>
      <p>error message</p>
    </div>
  );
}

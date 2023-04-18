import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";
import CardPassword from "./CardPassword";

export default function InputBoxPassword() {
  const [error, setError] = useState(false);

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    // setNameLength(event.target.value.trim().length);
  };

  return (
    <div>
      <p>카드 비밀번호</p>
      <CardPassword />
      <p>error message</p>
    </div>
  );
}

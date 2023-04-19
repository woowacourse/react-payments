import { useState, ChangeEvent } from "react";
import CardPassword from "./CardPassword";

import "./inputBoxPassword.css";

export default function InputBoxPassword() {
  const [error, setError] = useState(true);

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    // setNameLength(event.target.value.trim().length);
  };

  return (
    <div className="input-box-card-password">
      <p>카드 비밀번호</p>
      <CardPassword setError={setError} />
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}

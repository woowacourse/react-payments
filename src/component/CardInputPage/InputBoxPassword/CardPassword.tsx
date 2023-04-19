import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";

import "./cardPassword.css";
import { validatePassword } from "../../../validation/password";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardPassword(props: Props) {
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const { setError } = props;

  useEffect(() => {
    setError(error1 || error2);
  }, [error1, error2]);

  const onChangePassword =
    (setError: React.Dispatch<React.SetStateAction<boolean>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 1) {
        e.target.value = value.slice(0, 1);
      }

      if (validatePassword(e.target.value)) setError(false);
      else setError(true);
    };

  return (
    <div className="input-box-card-password">
      <Input
        className="input-password"
        type="password"
        onChange={onChangePassword(setError1)}
        inputMode="numeric"
      ></Input>
      <Input
        className="input-password"
        type="password"
        onChange={onChangePassword(setError2)}
        inputMode="numeric"
      ></Input>
      <input
        className="input-password"
        disabled
        type="password"
        defaultValue={0}
      />
      <input
        className="input-password"
        disabled
        type="password"
        defaultValue={0}
      />
    </div>
  );
}

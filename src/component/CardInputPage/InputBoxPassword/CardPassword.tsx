import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./cardPassword.css";
import { makeAppropriatePassword } from "../../../trans";
import { nowStatus } from "../../../type";

interface CardPasswordProps {
  changeHasError: (partIndex: number, state: nowStatus) => void;
  changePasswordStatus: (
    key: "isComplete" | "userInput",
    value: any,
    index?: number
  ) => void;
}

export default function CardPassword(props: CardPasswordProps) {
  const { changeHasError, changePasswordStatus } = props;

  const [passwordStatus, setPasswordStatus] = useState<string[]>([]);

  const onChangePassword = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userPassword = e.target.value.slice(0, 1);
      const appropriatePassword = makeAppropriatePassword(userPassword);

      if (appropriatePassword !== userPassword) {
        changeHasError(partIndex, 0);
      } else if (appropriatePassword.length === 1) {
        changeHasError(partIndex, 2);
        changePasswordStatus("userInput", passwordStatus, partIndex);
      } else {
        changeHasError(partIndex, 1);
      }

      const result = [...passwordStatus];
      result[partIndex] = appropriatePassword;
      setPasswordStatus(result);
    };
  };

  return (
    <div className="input-box-card-password">
      <Input
        name="card-password-1"
        className="input-password"
        type="password"
        onChange={onChangePassword(0)}
        inputMode="numeric"
        value={passwordStatus[0]}
      ></Input>
      <Input
        name="card-password-2"
        className="input-password"
        type="password"
        onChange={onChangePassword(1)}
        inputMode="numeric"
        value={passwordStatus[1]}
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

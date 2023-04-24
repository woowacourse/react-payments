import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import "./cardPassword.css";
import { validatePassword } from "../../../validation/password";
import CONSTANT from "../../../Constant";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
}

export default function CardPassword(props: Props) {
  const [inputStatus1, setInputStatus1] = useState(INPUT_STATUS.NOT_COMPLETE);
  const [inputStatus2, setInputStatus2] = useState(INPUT_STATUS.NOT_COMPLETE);

  const { setError, setIsComplete } = props;

  useEffect(() => {
    setError(
      inputStatus1 === INPUT_STATUS.ERROR || inputStatus2 === INPUT_STATUS.ERROR
    );

    setIsComplete(
      inputStatus1 === INPUT_STATUS.COMPLETE &&
        inputStatus2 === INPUT_STATUS.COMPLETE
    );
  }, [inputStatus1, inputStatus2]);

  const onChangePassword =
    (setInputStatus: React.Dispatch<React.SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 1) {
        e.target.value = value.slice(0, CONSTANT.PASSWORD_INPUT_MAX_LENGTH);
      }

      if (validatePassword(e.target.value))
        e.target.value.length === CONSTANT.PASSWORD_INPUT_MAX_LENGTH
          ? setInputStatus(INPUT_STATUS.COMPLETE)
          : setInputStatus(INPUT_STATUS.NOT_COMPLETE);
      else setInputStatus(INPUT_STATUS.ERROR);
    };

  return (
    <div className="input-box-card-password">
      <Input
        name="card-password-1"
        className="input-password"
        type="password"
        onChange={onChangePassword(setInputStatus1)}
        inputMode="numeric"
      ></Input>
      <Input
        name="card-password-2"
        className="input-password"
        type="password"
        onChange={onChangePassword(setInputStatus2)}
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

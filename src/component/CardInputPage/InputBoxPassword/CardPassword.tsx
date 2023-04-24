import { ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import "./cardPassword.css";
import { validatePassword } from "../../../validation/password";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
}

export default function CardPassword(props: Props) {
  const { setError, setIsComplete } = props;

  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(2);

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete]);

  const onChangePassword =
    (setInputStatus: (status: INPUT_STATUS) => void) =>
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
        onChange={onChangePassword(getSetStateFunction(0))}
        inputMode="numeric"
      ></Input>
      <Input
        name="card-password-2"
        className="input-password"
        type="password"
        onChange={onChangePassword(getSetStateFunction(1))}
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

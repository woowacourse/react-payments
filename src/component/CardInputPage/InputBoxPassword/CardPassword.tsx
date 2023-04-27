import { useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./cardPassword.module.css";
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
  }, [hasError, setError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete, setIsComplete]);

  const lengthParser = (value: string) => value.slice(0, CONSTANT.PASSWORD_INPUT_MAX_LENGTH);

  const getInputStatusSetter =
    (setInputStatus: (status: INPUT_STATUS) => void) =>
    (value: string) => {
      if (validatePassword(value)) {
        value.length === CONSTANT.PASSWORD_INPUT_MAX_LENGTH
          ? setInputStatus(INPUT_STATUS.COMPLETE)
          : setInputStatus(INPUT_STATUS.NOT_COMPLETE);
      } else {
        setInputStatus(INPUT_STATUS.ERROR);
      }
    };

  return (
    <div className={styles.inputBox}>
      <Input
        name="card-password-1"
        className={styles.input}
        type="password"
        parsers={[lengthParser]}
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(0))]}
        inputMode="numeric"
      ></Input>
      <Input
        name="card-password-2"
        className={styles.input}
        type="password"
        parsers={[lengthParser]}
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(1))]}
        inputMode="numeric"
      ></Input>
      <input
        className={styles.input}
        disabled
        type="password"
        defaultValue={0}
      />
      <input
        className={styles.input}
        disabled
        type="password"
        defaultValue={0}
      />
    </div>
  );
}

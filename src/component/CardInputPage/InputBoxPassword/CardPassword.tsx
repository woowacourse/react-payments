import { useEffect, useState } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./cardPassword.module.css";
import { validatePassword } from "../../../validation/password";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";
import { useCreditCardContext } from "../../../context/CreditCardContext";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
}

export default function CardPassword(props: Props) {
  const { setError, setIsComplete } = props;

  const [password, setPassword] = useState(['', '']);
  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(2);
  const { setCardInfo } = useCreditCardContext();

  const lengthParser = (value: string) => value.slice(0, CONSTANT.PASSWORD_INPUT_MAX_LENGTH);

  const setInputStatus =(value: string, index: number) => {
    if (validatePassword(value)) {
      value.length === CONSTANT.PASSWORD_INPUT_MAX_LENGTH
        ? getSetStateFunction(index)(INPUT_STATUS.COMPLETE)
        : getSetStateFunction(index)(INPUT_STATUS.NOT_COMPLETE);
    } else {
      getSetStateFunction(index)(INPUT_STATUS.ERROR);
    }
  };

  const makePasswordSetter =
    (index: number) =>
    (value: string) => {
      const newPassword = [...password];
      newPassword[index] = value;
      setPassword(newPassword);
    };

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  useEffect(() => {
    password.forEach((value, index) => setInputStatus(value, index));
  }, [password]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete]);

  useEffect(() => {
    setCardInfo({ password: password.join('') });
  }, [password]);

  return (
    <div className={styles.inputBox}>
      <Input
        name="card-password-1"
        className={styles.input}
        type="password"
        parsers={[lengthParser]}
        valueChangeSubscribers={[makePasswordSetter(0)]}
        inputMode="numeric"
      />
      <Input
        name="card-password-2"
        className={styles.input}
        type="password"
        parsers={[lengthParser]}
        valueChangeSubscribers={[makePasswordSetter(1)]}
        inputMode="numeric"
      />
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

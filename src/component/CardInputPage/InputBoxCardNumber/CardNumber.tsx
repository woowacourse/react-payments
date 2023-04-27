import { useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./cardNumber.module.css";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
  setPreviewDataHandler: () => void;
}

export default function CardNumber(props: Props) {
  const { setError, setIsComplete, setPreviewDataHandler } = props;

  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(4);

  useEffect(() => {
    setError(hasError);
  }, [hasError, setError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete, setIsComplete]);

  const lengthParser = (value: string) => value.slice(0, CONSTANT.NUMBER_INPUT_MAX_LENGTH);

  const getInputStatusSetter =
    (setInputStatus: (status: INPUT_STATUS) => void) =>
    (value: string) => {
      if (validateCardNumber(value)) {
        setInputStatus(
          value.length === CONSTANT.NUMBER_INPUT_MAX_LENGTH
            ? INPUT_STATUS.COMPLETE
            : INPUT_STATUS.NOT_COMPLETE
        );
      } else {
        setInputStatus(INPUT_STATUS.ERROR);
      }

      setPreviewDataHandler();
    };

  return (
    <>
      <Input
        name="card-number-1"
        className={`${styles.input} ${styles.first}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(0))]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-2"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(1))]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-3"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(2))]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-4"
        className={`${styles.input} ${styles.last}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[getInputStatusSetter(getSetStateFunction(3))]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
    </>
  );
}

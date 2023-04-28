import { useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./cardNumber.module.css";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";
import { useCreditCardContext } from "../../../context/CreditCardContext";

interface Props {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
}

export default function CardNumber(props: Props) {
  const { setError, setIsComplete } = props;

  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(4);
  const { card, setCardInfo } = useCreditCardContext();

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete, setIsComplete]);

  const lengthParser = (value: string) => value.slice(0, CONSTANT.NUMBER_INPUT_MAX_LENGTH);

  const makeInputStatusSetter =
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
    };

  const makeSetCardInfoSetter =
    (index: number) =>
    (value: string) => {
      const newNumber = [...card.number];
      newNumber[index] = value;
      setCardInfo({ number: newNumber });
    };

  return (
    <>
      <Input
        name="card-number-1"
        className={`${styles.input} ${styles.first}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(0)),
          makeSetCardInfoSetter(0),
        ]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-2"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(1)),
          makeSetCardInfoSetter(1),
        ]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-3"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(2)),
          makeSetCardInfoSetter(2),
        ]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
      <Input
        name="card-number-4"
        className={`${styles.input} ${styles.last}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(3)),
          makeSetCardInfoSetter(3),
        ]}
        parsers={[lengthParser]}
        placeholder="XXXX"
      />
    </>
  );
}

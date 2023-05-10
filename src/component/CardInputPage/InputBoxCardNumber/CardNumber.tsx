import { useEffect } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./cardNumber.module.css";
import CONSTANT from "../../../Constant";
import useMultipleInputStatus from "../../../hook/useMultipleInputStatus";
import { useCreditCardContext } from "../../../context/CreditCardContext";

interface Props {
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComplete: (value: boolean) => void;
}

export default function CardNumber(props: Props) {
  const { setHasError, setIsComplete } = props;

  const { hasError, isAllComplete, getSetStateFunction } = useMultipleInputStatus(4);
  const { card, setCardInfo } = useCreditCardContext();

  useEffect(() => {
    setHasError(hasError);
  }, [hasError]);

  useEffect(() => {
    setIsComplete(isAllComplete);
  }, [isAllComplete, setIsComplete]);

  const lengthParser = (value: string) => value.slice(0, CONSTANT.NUMBER_INPUT_MAX_LENGTH);

  const makeInputStatusSetter =
    (setInputStatus: (status: INPUT_STATUS) => void) =>
    (value: string) => {
      if (!validateCardNumber(value)) {
        setInputStatus(INPUT_STATUS.ERROR);
        return;
      }

      const status = value.length === CONSTANT.NUMBER_INPUT_MAX_LENGTH
        ? INPUT_STATUS.COMPLETE
        : INPUT_STATUS.NOT_COMPLETE;

      setInputStatus(status);
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
        role="textbox"
        aria-label="카드 번호 첫 번째부터 네 번째 숫자"
        className={`${styles.input} ${styles.first}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(0)),
          makeSetCardInfoSetter(0),
        ]}
        parsers={[lengthParser]}
        required={true}
        placeholder="XXXX"
      />
      <Input
        role="textbox"
        aria-label="카드 번호 다섯 번째부터 여덟 번째 숫자"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(1)),
          makeSetCardInfoSetter(1),
        ]}
        parsers={[lengthParser]}
        required={true}
        placeholder="XXXX"
      />
      <Input
        role="textbox"
        aria-label="카드 번호 아홉 번째부터 열두 번째 숫자"
        className={styles.input}
        type="password"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(2)),
          makeSetCardInfoSetter(2),
        ]}
        parsers={[lengthParser]}
        required={true}
        placeholder="XXXX"
      />
      <Input
        role="textbox"
        aria-label="카드 번호 열세 번째부터 열여섯 번째 숫자"
        className={`${styles.input} ${styles.last}`}
        type="text"
        inputMode="numeric"
        valueChangeSubscribers={[
          makeInputStatusSetter(getSetStateFunction(3)),
          makeSetCardInfoSetter(3),
        ]}
        parsers={[lengthParser]}
        required={true}
        placeholder="XXXX"
      />
    </>
  );
}

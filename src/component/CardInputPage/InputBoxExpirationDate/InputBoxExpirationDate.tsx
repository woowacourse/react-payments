import { useState, useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./inputBoxExpirationDate.module.css";
import { validateExpirationDate } from "../../../validation/ExpirationDate";
import CONSTANT from "../../../Constant"
import { useCreditCardContext } from "../../../context/CreditCardContext";

interface Props {
  setIsComplete: (value: boolean) => void;
}

export default function InputBoxExpirationDate(props: Props) {
  const { setIsComplete } = props;

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);
  const { setCardInfo } = useCreditCardContext();

  const removeSlashParser = (value: string) => value.split("/").join("").replace(/\s/g, '');

  const lengthParser = (value: string) => value.slice(0, CONSTANT.MONTH_INPUT_MAX_LENGTH + CONSTANT.YEAR_INPUT_MAX_LENGTH)

  const dateFormatter = (value: string) => (
    value.length > CONSTANT.MONTH_INPUT_MAX_LENGTH
    ? value.slice(0, CONSTANT.MONTH_INPUT_MAX_LENGTH) + "/" + value.slice(CONSTANT.YEAR_INPUT_MAX_LENGTH)
    : value
  );

  const inputStatusHandler = (value: string) => {
    if (!validateExpirationDate(value)) {
      setInputStatus(INPUT_STATUS.ERROR);
      return;
    }

    const status =  value.length === CONSTANT.MONTH_INPUT_MAX_LENGTH + CONSTANT.YEAR_INPUT_MAX_LENGTH + 1
      ? INPUT_STATUS.COMPLETE
      : INPUT_STATUS.NOT_COMPLETE;

    setInputStatus(status);
  };

  const dateSetter = (value: string) => setCardInfo({ date: value });

  useEffect(() => {
    setIsComplete(inputStatus === INPUT_STATUS.COMPLETE ? true : false);
  }, [inputStatus]);

  return (
    <div className={styles.inputBox}>
      <p>만료일</p>
      <Input
        data-testid="expiration-date"
        className="input-expiration-date"
        type="text"
        parsers={[removeSlashParser, lengthParser, dateFormatter]}
        valueChangeSubscribers={[inputStatusHandler, dateSetter]}
        placeholder="MM / YY"
        inputMode="numeric"
      ></Input>
      <p className={inputStatus === INPUT_STATUS.ERROR ? styles.visible : ""}>
        연과 월은 각각 두 자리의 숫자로 입력해 주세요!!!
      </p>
    </div>
  );
}

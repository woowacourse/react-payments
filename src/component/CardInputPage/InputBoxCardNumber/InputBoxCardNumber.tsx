import { useEffect, useState } from "react";
import CardNumber from "./CardNumber";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

import "./inputBoxCardNumber.css";
import { nowStatus } from "../../../type";

interface Props {
  changeCardNumberStatus: (
    key: "isComplete" | "userInput",
    value: any,
    index?: number
  ) => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { changeCardNumberStatus } = props;

  const [allStatus, setAllStatus] = useState<nowStatus[]>([1, 1, 1, 1]);
  let hasError = false;

  useEffect(() => {
    hasError = allStatus.includes(0) ? true : false;

    allStatus.every((status) => status === 2)
      ? changeCardNumberStatus("isComplete", true)
      : changeCardNumberStatus("isComplete", false);
  }, [allStatus]);

  const changeHasError = (partIndex: number, state: nowStatus) => {
    const changedError = [...allStatus];
    changedError[partIndex] = state;
    return setAllStatus(changedError);
  };

  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber
        changeHasError={changeHasError}
        changeCardNumberStatus={changeCardNumberStatus}
      />
      <p className={hasError ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_NUMBER}
      </p>
    </div>
  );
}

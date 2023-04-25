import { useState } from "react";
import CardNumber from "./CardNumber";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

import "./inputBoxCardNumber.css";
import { CreditCard } from "../../../type";

interface Props {
  changeCardNumberStatus: (
    key: "isComplete" | "userInput",
    value: any,
    index?: number
  ) => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { changeCardNumberStatus } = props;

  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber
        setHasError={setHasError}
        changeCardNumberStatus={changeCardNumberStatus}
      />
      <p className={hasError ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_NUMBER}
      </p>
    </div>
  );
}

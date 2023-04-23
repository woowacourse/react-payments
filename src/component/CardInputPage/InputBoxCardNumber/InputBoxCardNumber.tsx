import { ChangeEvent, useEffect, useState } from "react";
import CardNumber from "./CardNumber";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

import "./inputBoxCardNumber.css";
import { CreditCard } from "../../../type";

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { setIsComplete, changeNowCardInfo } = props;

  const [error, setError] = useState(true);
  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber
        setError={setError}
        setIsComplete={setIsComplete}
        changeNowCardInfo={changeNowCardInfo}
      />
      <p className={error ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_NUMBER}
      </p>
    </div>
  );
}

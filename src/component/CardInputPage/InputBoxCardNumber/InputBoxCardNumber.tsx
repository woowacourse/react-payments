import { ChangeEvent, useEffect, useState } from "react";
import CardNumber from "./CardNumber";
import { CARD_ERROR_MESSAGE, INPUT_STATUS } from "../../../CONSTANT";

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

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);

  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber
        setInputStatus={setInputStatus}
        setIsComplete={setIsComplete}
        changeNowCardInfo={changeNowCardInfo}
      />
      <p className={inputStatus === INPUT_STATUS.ERROR ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_NUMBER}
      </p>
    </div>
  );
}

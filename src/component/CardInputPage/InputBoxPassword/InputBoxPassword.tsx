import { useState, ChangeEvent } from "react";
import CardPassword from "./CardPassword";

import "./inputBoxPassword.css";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

interface Props {
  changePasswordStatus: (
    key: "isComplete" | "userInput",
    value: any,
    index?: number
  ) => void;
}

export default function InputBoxPassword(props: Props) {
  const { changePasswordStatus } = props;

  const [isError, setIsError] = useState(false);

  return (
    <div className="input-box-card-password">
      <p>카드 비밀번호</p>
      <CardPassword
        setIsError={setIsError}
        changePasswordStatus={changePasswordStatus}
      />
      <p className={isError ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_PASSWORD}
      </p>
    </div>
  );
}

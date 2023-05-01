import { useState, useEffect } from "react";

import CardPassword from "./CardPassword";

import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { nowStatus } from "../../../type";

import "./inputBoxPassword.css";

interface InputBoxPasswordProps {
  changePasswordStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxPassword(props: InputBoxPasswordProps) {
  const { changePasswordStatus } = props;

  const [allStatus, setAllStatus] = useState<nowStatus[]>([1, 1]);
  let hasError = false;

  useEffect(() => {
    hasError = allStatus.includes(0) ? true : false;

    allStatus.every((status) => status === 2)
      ? changePasswordStatus(true)
      : changePasswordStatus(false);
  }, [allStatus]);

  const changeHasError = (partIndex: number, state: nowStatus) => {
    const changedError = [...allStatus];
    changedError[partIndex] = state;
    return setAllStatus(changedError);
  };

  return (
    <div className="input-box-card-password">
      <p>카드 비밀번호</p>
      <CardPassword
        changeHasError={changeHasError}
        changePasswordStatus={changePasswordStatus}
      />
      <p className="error-message">
        {hasError && CARD_ERROR_MESSAGE.INPUT_CARD_PASSWORD}
      </p>
    </div>
  );
}

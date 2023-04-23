import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";

import "./inputBoxOwner.css";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { validateCardOwner } from "../../../validation/cardOwner";
import { CreditCard } from "../../../type";

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

const INPUT_STATUS = {
  ERROR: 0,
  NOT_COMPLETE: 1,
  COMPLETE: 2,
};

export default function InputBoxOwner(props: Props) {
  const { setIsComplete, changeNowCardInfo } = props;

  const [nameLength, setNameLength] = useState(0);
  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .split(/\s{2,}/)
      .filter((spelling) => spelling !== "")
      .join(" ");

    e.target.value = value.slice(0, 30).trim().toUpperCase();

    if (validateCardOwner(e.target.value)) {
      setInputStatus(INPUT_STATUS.COMPLETE);
      changeNowCardInfo("name", e.target.value);
    } else {
      setInputStatus(INPUT_STATUS.ERROR);
    }

    setNameLength(e.target.value.length);
  };

  useEffect(() => {
    setIsComplete(inputStatus === INPUT_STATUS.COMPLETE ? true : false);
  }, [inputStatus]);

  return (
    <div className="input-box-card-owner">
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/30</p>
      <Input
        name="card-owner"
        className="input-card-owner"
        type="text"
        onChange={onChangeCallback}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
      ></Input>
      <p className={inputStatus === INPUT_STATUS.ERROR ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_OWNER}
      </p>
    </div>
  );
}

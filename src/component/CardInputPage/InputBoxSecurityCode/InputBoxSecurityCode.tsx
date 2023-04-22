import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";

import "./inputBoxSecurityCode.css";
import { validateSecurityNumber } from "../../../validation/securityNumber";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const INPUT_STATUS = {
  ERROR: 0,
  NOT_COMPLETE: 1,
  COMPLETE: 2,
};

export default function InputBoxSecurityCode(props: Props) {
  const { setIsComplete } = props;

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) e.target.value = e.target.value.slice(0, 3);

    if (validateSecurityNumber(e.target.value)) {
      e.target.value.length === 3
        ? setInputStatus(INPUT_STATUS.COMPLETE)
        : setInputStatus(INPUT_STATUS.NOT_COMPLETE);
    } else {
      setInputStatus(INPUT_STATUS.ERROR);
    }
  };

  useEffect(() => {
    setIsComplete(inputStatus === INPUT_STATUS.COMPLETE ? true : false);
  }, [inputStatus]);

  return (
    <div className="input-box-security-code">
      <p>보안 코드(CVC/CVV)</p>
      <Input
        name="security-code"
        className="input-security-code"
        type="password"
        onChange={onChangeCallback}
        inputMode="numeric"
      ></Input>
      <button className="button-security-code" type="button">
        ?
      </button>
      <p className={inputStatus === INPUT_STATUS.ERROR ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_PASSWORD}
      </p>
    </div>
  );
}

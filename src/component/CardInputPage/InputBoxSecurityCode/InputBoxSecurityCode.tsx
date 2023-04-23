import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import "./inputBoxSecurityCode.css";
import { validateSecurityNumber } from "../../../validation/securityNumber";
import CONSTANT from "../../../Constant";

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputBoxSecurityCode(props: Props) {
  const { setIsComplete } = props;

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > CONSTANT.SECURITY_INPUT_MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, CONSTANT.SECURITY_INPUT_MAX_LENGTH);
    }

    if (validateSecurityNumber(e.target.value)) {
      e.target.value.length === CONSTANT.SECURITY_INPUT_MAX_LENGTH
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
        보안 코드는 세 자리의 숫자로 입력해 주세요!!!
      </p>
    </div>
  );
}

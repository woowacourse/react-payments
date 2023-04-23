import { useState, useEffect, ChangeEvent } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import "./inputBoxExpirationDate.css";
import { validateExpirationDate } from "../../../validation/ExpirationDate";
import CONSTANT from "../../../Constant"

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setPreviewDataHandler: () => void;
}

export default function InputBoxExpirationDate(props: Props) {
  const { setIsComplete, setPreviewDataHandler } = props;

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);

  const changeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const originDate = e.target.value
      .split("/")
      .join("")
      .slice(0, CONSTANT.MONTH_INPUT_MAX_LENGTH + CONSTANT.YEAR_INPUT_MAX_LENGTH);

    const formattedDate =
      originDate.length > CONSTANT.MONTH_INPUT_MAX_LENGTH
        ? originDate.slice(0, CONSTANT.MONTH_INPUT_MAX_LENGTH) + "/" + originDate.slice(CONSTANT.YEAR_INPUT_MAX_LENGTH)
        : originDate;

    e.target.value = formattedDate;
    if (e.target.value.length > 5) e.target.value = e.target.value.slice(0, 5);

    if (validateExpirationDate(e.target.value)) {
      e.target.value.length === 5
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
    <div className="input-box-expiration-date">
      <p>만료일</p>
      <Input
        name="expiration-date"
        className="input-expiration-date"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => { 
          changeExpirationDate(e);
          setPreviewDataHandler();
        }}
        placeholder="MM / YY"
        inputMode="numeric"
      ></Input>
      <p className={inputStatus === INPUT_STATUS.ERROR ? "visible" : ""}>
        연과 월은 각각 두 자리의 숫자로 입력해 주세요!!!
      </p>
    </div>
  );
}

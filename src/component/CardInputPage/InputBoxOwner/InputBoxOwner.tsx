import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxOwner.css";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { CreditCard } from "../../../type";
import { makeAppropriateName } from "../../../trans";

interface Props {
  changeCardOwnerStatus: (key: "isComplete" | "userInput", value: any) => void;
  changeNowCardInfo: (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => void;
}

export default function InputBoxOwner(props: Props) {
  const { changeCardOwnerStatus, changeNowCardInfo } = props;

  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputName = e.target.value.slice(0, 30).toUpperCase();
    const appropriateName = makeAppropriateName(userInputName);

    if (userInputName !== appropriateName) {
      setIsError(true);
      changeCardOwnerStatus("isComplete", false);
    } else {
      setIsError(false);
      changeCardOwnerStatus("isComplete", true);
    }

    changeNowCardInfo("owner", appropriateName);
    changeCardOwnerStatus("userInput", appropriateName);
    setName(appropriateName);
  };

  return (
    <div className="input-box-card-owner">
      <p>카드 소유자 이름(선택)</p>
      <p>{name.length}/30</p>
      <Input
        name="card-owner"
        className="input-card-owner"
        type="text"
        onChange={changeName}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
        value={name}
      ></Input>
      <p className={isError ? "visible" : ""}>
        {CARD_ERROR_MESSAGE.INPUT_CARD_OWNER}
      </p>
    </div>
  );
}

import "./inputBoxOwner.css";

import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { makeAppropriateName } from "../../../trans";

interface InputBoxOwnerProps {
  changeCardOwnerStatus: (key: "isComplete" | "userInput", value: any) => void;
}

export default function InputBoxOwner(props: InputBoxOwnerProps) {
  const { changeCardOwnerStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [name, setName] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputName = e.target.value.slice(0, 30).toUpperCase();
    const appropriateName = makeAppropriateName(userInputName);

    if (userInputName !== appropriateName) {
      setHaveError(true);
      changeCardOwnerStatus("isComplete", false);
    } else {
      setHaveError(false);
      changeCardOwnerStatus("isComplete", true);
    }

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
      />
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_OWNER}
      </p>
    </div>
  );
}

import { useState, ChangeEvent } from "react";

import Input from "../../common/Input";

import {
  ARIA_LABEL_MESSAGE,
  CARD_ERROR_MESSAGE,
  EXPLANATION_MESSAGE,
  INPUT_LENGTH_LIMIT,
  PLACE_HOLDER,
} from "../../../CONSTANT";
import { makeAppropriateName } from "../../../util/trans";

import "./inputBoxOwner.css";

interface InputBoxOwnerProps {
  changeCardOwnerStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxOwner(props: InputBoxOwnerProps) {
  const { changeCardOwnerStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [name, setName] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputName = e.target.value
      .slice(0, INPUT_LENGTH_LIMIT.MAX_OWNER)
      .toUpperCase();
    const appropriateName = makeAppropriateName(userInputName);

    if (userInputName !== appropriateName) {
      setHaveError(true);
      changeCardOwnerStatus(false);
    } else {
      setHaveError(false);
      changeCardOwnerStatus(true, appropriateName);
    }

    setName(appropriateName);
  };

  return (
    <label className="input-box-card-owner">
      <p>{EXPLANATION_MESSAGE.INPUT_OWNER}</p>
      <p aria-label={ARIA_LABEL_MESSAGE.COMPARE_NOW_LENGTH_AND_LIMIT}>
        {name.length}/{INPUT_LENGTH_LIMIT.MAX_OWNER}
      </p>
      <Input
        name="card-owner"
        className="input-card-owner"
        type="text"
        onChange={changeName}
        placeholder={PLACE_HOLDER.OWNER}
        inputMode="text"
        required={true}
        value={name}
      />
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_OWNER}
      </p>
    </label>
  );
}

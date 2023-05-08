import { useState, ChangeEvent } from "react";

import CardInfoInput from "../../common/CardInfoInput";

import {
  ARIA_LABEL_MESSAGE,
  CARD_ERROR_MESSAGE,
  DIRECTION_MESSAGE,
  EXPLANATION_MESSAGE,
  INPUT_LENGTH_LIMIT,
} from "../../../CONSTANT";
import { makeAppropriateSecurityCode } from "../../../util/trans";

import "./inputBoxSecurityCode.css";

interface InputBoxSecurityProps {
  changeSecurityCodeStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxSecurityCode(props: InputBoxSecurityProps) {
  const { changeSecurityCodeStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [guideClick, isGuideClick] = useState(false);

  const changeSecurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const userSecurityCode = e.target.value.slice(
      0,
      INPUT_LENGTH_LIMIT.MAX_SECURITY_CODE
    );
    const appropriateSecurityCode =
      makeAppropriateSecurityCode(userSecurityCode);

    if (userSecurityCode !== appropriateSecurityCode) {
      setHaveError(true);
      changeSecurityCodeStatus(false);
    } else if (appropriateSecurityCode.length === 3) {
      setHaveError(false);
      changeSecurityCodeStatus(true, appropriateSecurityCode);
    } else {
      setHaveError(false);
      changeSecurityCodeStatus(false);
    }

    setSecurityCode(appropriateSecurityCode);
  };

  const changeGuideClick = () => {
    isGuideClick(!guideClick);
  };

  return (
    <label className="input-box-security-code">
      <p>{EXPLANATION_MESSAGE.INPUT_SECURITY_CODE}</p>
      <CardInfoInput
        inputPlace="essential"
        name="security-code"
        className="input-security-code"
        type="password"
        onChange={changeSecurityCode}
        value={securityCode}
      />
      <button
        className="button-security-code"
        type="button"
        onClick={changeGuideClick}
      >
        ?
      </button>
      {guideClick && (
        <p
          className="guide-security-code"
          aria-label={ARIA_LABEL_MESSAGE.SECURITY_CODE_GUIDE_BUTTON}
        >
          {DIRECTION_MESSAGE.SECURITY_CODE}
        </p>
      )}
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_SECURITY}
      </p>
    </label>
  );
}

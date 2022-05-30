import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import CVC from "../../../assets/cvcImage.png";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import UserGuide from "../../../common/UserGuide";
import { Context } from "../../../contexts/CardContext";

interface CardSecurityProps {
  validateFormValidation: (key: string, isValid: boolean) => void;
}

const checkSecurityCode = (securityCode: string) => {
  if (securityCode.length !== 3) {
    throw new Error("3자리의 보안코드를 입력해주세요.");
  }
};

export default function CardSecurityCode({ validateFormValidation }: CardSecurityProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [cardInfo, dispatch] = useContext(Context);
  const { securityCode } = cardInfo;

  const handleChangesSecurityCode = e => {
    const targetSecurityCode: string = e.target.value;

    validateInput(targetSecurityCode, checkSecurityCode);
    validateFormValidation("securityCode", isValidInput(targetSecurityCode, checkSecurityCode));

    dispatch({ type: "UPDATE_SECURITY_CODE", payload: { securityCode: targetSecurityCode } });
  };

  return (
    <InputContainer inputTitle="보안 코드(CVC/CVV)" validation={inputValidation}>
      <div className="input-box w-25">
        <Input
          type="password"
          value={securityCode || ""}
          onChange={handleChangesSecurityCode}
          maxLength={3}
          name="securityCode"
          pattern="^[0-9]{1,3}$"
        />
        <UserGuide>
          <img width="160px" src={CVC} alt="cvc" />
        </UserGuide>
      </div>
    </InputContainer>
  );
}

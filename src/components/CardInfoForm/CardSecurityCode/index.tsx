import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import CVC from "../../../assets/cvcImage.png";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import UserGuide from "../../../common/UserGuide";
import { checkSecurityCode } from "../../../validations/cardInfoForm";
import { Context } from "../../../contexts/store";

interface CardSecurityProps {
  validateFormValidation: any;
}

export default function CardSecurityCode({ validateFormValidation }: CardSecurityProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [state, dispatch] = useContext(Context);
  const { securityCode } = state;

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
          pattern="^[0-9]{0,3}$"
        />
        <UserGuide>
          <img width="160px" src={CVC} alt="cvc" />
        </UserGuide>
      </div>
    </InputContainer>
  );
}

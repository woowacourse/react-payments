import React from "react";

import CVC from "../../assets/cvcImage.png";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import UserGuide from "../common/UserGuide";

export default function SecurityCode({ securityCode, onChange, isValid }) {
  return (
    <InputContainer inputTitle="보안 코드(CVC/CVV)" isValid={isValid}>
      <div className="input-box w-25">
        <Input
          type="password"
          value={securityCode || ""}
          onChange={onChange}
          maxLength={3}
          name="securityCode"
        />
        <UserGuide>
          <img width="160px" src={CVC} alt="cvc" />
        </UserGuide>
      </div>
    </InputContainer>
  );
}

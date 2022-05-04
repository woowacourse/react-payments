import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

import Input from "../../common/Input";
import InputContainer from "../../common/InputContainer";

export default function CardExpirationDate({ inputs }: { inputs: HTMLInputElement[] }) {
  const {
    cardInfo: { expirationDate },
    cardInfoValidation: { expirationDate: validation },
    onChangeExpirationDate: onChange,
  } = useContext(CardInfoContext);

  return (
    <InputContainer title="만료일" validation={validation}>
      <div className="input-box w-50 flex-center">
        <Input
          type="text"
          placeholder="MM"
          maxLength={2}
          onChange={onChange}
          value={expirationDate.month || ""}
          style={{ paddingLeft: "40px" }}
          name="expirationDate"
          data-key="month"
          inputs={inputs}
        />
        <span className="expiration-date-delimiter">/</span>
        <Input
          type="text"
          placeholder="YY"
          maxLength={2}
          onChange={onChange}
          value={expirationDate.year || ""}
          style={{ paddingRight: "40px" }}
          name="expirationDate"
          data-key="year"
          inputs={inputs}
        />
      </div>
    </InputContainer>
  );
}

import React, { useEffect, useState } from "react";

import { validateExpirationDateLength } from "../../lib/validation";
import type { InputChangeFunction } from "../../types";
import type { ExpirationDate } from "../../types/cardInfo";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardExpirationDateProps {
  expirationDate: ExpirationDate;
  onChange: InputChangeFunction;
  isValid: boolean;
}
export default function CardExpirationDate({
  expirationDate,
  onChange,
  isValid,
}: CardExpirationDateProps) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(validateExpirationDateLength(expirationDate));
  }, [expirationDate]);

  return (
    <InputContainer title="만료일" isValid={isValid} shouldShowError={hasValue}>
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
          formSelector="#card-info-form"
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
          formSelector="#card-info-form"
        />
      </div>
    </InputContainer>
  );
}

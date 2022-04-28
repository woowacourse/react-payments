import React, { useEffect, useState } from "react";

import { ExpirationDate } from "../../types";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardExpirationDateProps {
  expirationDate: ExpirationDate;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
export default function CardExpirationDate({
  expirationDate,
  onChange,
  isValid,
}: CardExpirationDateProps) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(!!expirationDate.month && !!expirationDate.month);
  }, [expirationDate]);

  return (
    <InputContainer inputTitle="만료일" isValid={isValid} isError={hasValue}>
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
        />
      </div>
    </InputContainer>
  );
}

import React, { useEffect, useState } from "react";

import { validateExpiredDateLength } from "../../../lib/validation";
import { ExpiredDate } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
interface CardExpiredDateProps {
  expiredDate: ExpiredDate;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
export default function CardExpiredDate({ expiredDate, onChange, isValid }: CardExpiredDateProps) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(validateExpiredDateLength(expiredDate));
  }, [expiredDate]);

  return (
    <InputContainer inputTitle="만료일" isValid={isValid} isError={hasValue}>
      <div className="input-box w-50 flex-center">
        <Input
          type="text"
          placeholder="MM"
          maxLength={2}
          onChange={onChange}
          value={expiredDate.month || ""}
          style={{ paddingLeft: "40px" }}
          name="expiredDate"
          data-key="month"
        />
        <span className="expired-date-delimiter">/</span>
        <Input
          type="text"
          placeholder="YY"
          maxLength={2}
          onChange={onChange}
          value={expiredDate.year || ""}
          style={{ paddingRight: "40px" }}
          name="expiredDate"
          data-key="year"
        />
      </div>
    </InputContainer>
  );
}

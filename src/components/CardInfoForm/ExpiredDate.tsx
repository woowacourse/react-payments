import React from "react";

import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

export default function ExpiredDate({ expiredDate, onChange, isValid }) {
  return (
    <InputContainer inputTitle="만료일" isValid={isValid}>
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

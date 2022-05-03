import React from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { ExpiredDate } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkExpiredDate } from "../../../validations/cardInfoForm";

interface CardExpiredDateProps {
  expiredDate: ExpiredDate;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardExpiredDate({ expiredDate, onChange }: CardExpiredDateProps) {
  const { inputValidation, validateInput } = useInputValidation(false);

  const handleChangeExpiredMonth = e => {
    const month = e.target.value;
    const targetExpiredDate = { ...expiredDate, month };

    validateInput(targetExpiredDate, checkExpiredDate);
    onChange(e);
  };

  const handleChangeExpiredYear = e => {
    const year = e.target.value;
    const targetExpiredDate = { ...expiredDate, year };

    validateInput(targetExpiredDate, checkExpiredDate);
    onChange(e);
  };

  return (
    <InputContainer inputTitle="만료일" validation={inputValidation}>
      <div className="input-box w-50 flex-center">
        <Input
          type="text"
          placeholder="MM"
          maxLength={2}
          onChange={handleChangeExpiredMonth}
          value={expiredDate.month || ""}
          style={{ paddingLeft: "40px" }}
          name="expiredDate"
          data-key="month"
          pattern="^[0-9]{0,2}$"
        />
        <span className="expired-date-delimiter">/</span>
        <Input
          type="text"
          placeholder="YY"
          maxLength={2}
          onChange={handleChangeExpiredYear}
          value={expiredDate.year || ""}
          style={{ paddingRight: "40px" }}
          name="expiredDate"
          data-key="year"
          pattern="^[0-9]{0,2}$"
        />
      </div>
    </InputContainer>
  );
}

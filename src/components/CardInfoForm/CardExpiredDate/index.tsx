import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { ExpiredDate } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkExpiredDate } from "../../../validations/cardInfoForm";
import { Context } from "../../../contexts/CardContext";

interface CardExpiredDateProps {
  validateFormValidation: any;
}

export default function CardExpiredDate({ validateFormValidation }: CardExpiredDateProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [cardInfo, dispatch] = useContext(Context);
  const { expiredDate } = cardInfo;

  const handleChangeExpired = e => {
    const { value } = e.target;
    const { key } = e.target.dataset;
    const targetExpiredDate: ExpiredDate = { ...expiredDate };

    targetExpiredDate[key] = value;

    validateInput(targetExpiredDate, checkExpiredDate);
    validateFormValidation("expiredDate", isValidInput(targetExpiredDate, checkExpiredDate));

    dispatch({ type: "UPDATE_EXPIRED_DATE", payload: { expiredDate: value, key } });
  };

  return (
    <InputContainer inputTitle="만료일" validation={inputValidation}>
      <div className="input-box w-50 flex-center">
        <Input
          type="text"
          placeholder="MM"
          maxLength={2}
          onChange={handleChangeExpired}
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
          onChange={handleChangeExpired}
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

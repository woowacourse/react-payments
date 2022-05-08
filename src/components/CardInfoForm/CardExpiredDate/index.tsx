import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { ExpiredDate } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { Context } from "../../../contexts/CardContext";

interface CardExpiredDateProps {
  validateFormValidation: (key: string, isValid: boolean) => void;
}

const checkExpiredDate = (expiredDate: ExpiredDate) => {
  const date = new Date();
  const currentYear = date.getFullYear() % 100;
  const currentMonth = date.getMonth() + 1;
  const targetYear = Number(expiredDate.year);
  const targetMonth = Number(expiredDate.month);

  if (!Object.keys(expiredDate).every(key => expiredDate[key].length === 2)) {
    throw new Error("MM/YY 형태로 입력해주세요. (예: 01/23)");
  }

  if (targetMonth < 1 || targetMonth > 12) {
    throw new Error("1월부터 12월 사이의 값을 입력해주세요.");
  }

  if (targetYear < currentYear || (targetYear === currentYear && targetMonth < currentMonth))
    throw new Error(
      `해당 만료일은 이미 지났습니다. (현재: ${currentMonth
        .toString()
        .padStart(2, "0")}/${currentYear})`
    );

  if (
    targetYear > currentYear + 5 ||
    (targetYear === currentYear + 5 && targetMonth > currentMonth)
  )
    throw new Error(
      `만료일은 현재로부터 5년이내여야합니다.  (현재: ${currentMonth
        .toString()
        .padStart(2, "0")}/${currentYear})`
    );
};

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

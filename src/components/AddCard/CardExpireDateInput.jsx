import { Fragment, useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import {
  isCompleteExpireMonth,
  isCompleteExpireYear,
  isInValidExpireDate,
} from "../../validators/validator.ts";
import { setExpireDate } from "../../reducer/cardReducer";

export default function CardExpireDateInput() {
  const {
    state: { expireDate },
    dispatch,
  } = useContext(CardInfoContext);

  const expireDateList = Object.entries(expireDate);
  const [month, year] = expireDateList;
  const monthValue = month[1];
  const yearValue = year[1];

  const handleExpireDateUpdate = ({ target: { value } }, dateType) => {
    if (isInValidExpireDate(value)) return;

    dispatch(setExpireDate({ value, dateType }));
  };

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"135px"}
      horizontalAlign={"center"}
      guideMessage={GUIDE_MESSAGE.VALID_EXPIRE_DATE}
      isComplete={
        isCompleteExpireMonth(monthValue) && isCompleteExpireYear(yearValue)
      }
    >
      {expireDateList.map((expireDate) => {
        const [expireDateKey, expireDateValue] = expireDate;
        return (
          <Fragment key={expireDateKey}>
            <Input
              name={"expireDate"}
              className={"expireDate"}
              value={expireDateValue}
              type={"text"}
              placeholder={expireDateKey === "month" ? "MM" : "YY"}
              width={"40px"}
              maxLength={CARD_INFO_RULES.EXPIRE_DATE_UNIT_LENGTH}
              required
              onChange={(e) => handleExpireDateUpdate(e, expireDateKey)}
              isComplete={
                expireDateKey === "month"
                  ? isCompleteExpireMonth(expireDateValue)
                  : isCompleteExpireYear(expireDateValue)
              }
            />
            {expireDateKey === "month" && <p>/</p>}
          </Fragment>
        );
      })}
    </InputField>
  );
}

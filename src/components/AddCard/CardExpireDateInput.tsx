import { Fragment } from "react";
import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";
import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import {
  isCompleteExpireMonth,
  isCompleteExpireYear,
  isInValidExpireDate,
} from "../../validators/validator";
import { setExpireDate } from "../../reducer/cardReducer";
import useUpdateHandler from "../../hooks/useUpdateHandler";
import { IExpireDateState } from "../../types/cardInfoState";

export default function CardExpireDateInput({
  expireDate,
  dispatch,
}: {
  expireDate: IExpireDateState;
  dispatch: React.Dispatch<any>;
}) {
  const expireDateList = Object.entries(expireDate);
  const [month, year] = expireDateList;
  const monthValue = month[1];
  const yearValue = year[1];

  const { updateHandler } = useUpdateHandler(
    dispatch,
    setExpireDate,
    isInValidExpireDate
  );

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
      <>
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
                onChange={(e) => updateHandler(e, expireDateKey)}
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
      </>
    </InputField>
  );
}

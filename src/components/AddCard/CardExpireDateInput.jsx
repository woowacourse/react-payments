import { Fragment, useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import { isCompleteExpireDate } from "../../validators/validator";

export default function CardExpireDateInput() {
  const {
    state: { expireDate },
    actions: { handleExpireDateUpdate },
  } = useContext(CardInfoContext);

  const expireDateList = Object.values(expireDate);
  const [month, year] = expireDateList;

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"135px"}
      horizontalAlign={"center"}
      guideMessage={GUIDE_MESSAGE.VALID_EXPIRE_DATE}
      isComplete={isCompleteExpireDate("expireDate", [year.value, month.value])}
    >
      {expireDateList.map((expireDate) => (
        <Fragment key={expireDate.keyType}>
          <Input
            name={"expireDate"}
            className={"expireDate"}
            value={expireDate.value}
            type={"text"}
            placeholder={expireDate.keyType === "month" ? "MM" : "YY"}
            width={"40px"}
            maxLength={CARD_INFO_RULES.EXPIRE_DATE_UNIT_LENGTH}
            required
            onChange={(e) => handleExpireDateUpdate(e, expireDate.keyType)}
            isComplete={isCompleteExpireDate(
              expireDate.keyType,
              expireDate.value
            )}
          />
          {expireDate.keyType === "month" && <p>/</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

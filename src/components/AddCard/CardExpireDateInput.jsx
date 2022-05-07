import { Fragment, useContext } from "react";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import { CardInfoContext } from "../../contexts/CardInfoContext";

export default function CardExpireDateInput() {
  const {
    state: { expireDate },
    actions: { handleExpireDateUpdate },
  } = useContext(CardInfoContext);

  const expireDateList = Object.values(expireDate);
  const expireDateLength = expireDateList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"135px"}
      horizontalAlign={"center"}
      guideMessage={GUIDE_MESSAGE.VALID_EXPIRE_DATE}
      isComplete={expireDateLength === CARD_INFO_RULES.EXPIRE_DATE_LENGTH}
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
            isComplete={
              expireDate.value.length ===
              CARD_INFO_RULES.EXPIRE_DATE_UNIT_LENGTH
            }
          />
          {expireDate.keyType === "month" && <p>/</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

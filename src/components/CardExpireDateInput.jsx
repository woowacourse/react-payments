import { Fragment } from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

export default function CardExpireDateInput({ expireDate, onChange }) {
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
      errorMessage={"만료일은 0~9까지 숫자로 입력해주세요."}
      isComplete={expireDateLength === CARD_INFO_RULES.EXPIRE_DATE_LENGTH}
    >
      {expireDateList.map((expireDate) => (
        <Fragment key={expireDate.keyType}>
          <Input
            name={expireDate.name}
            className={expireDate.name}
            value={expireDate.value}
            type={expireDate.type}
            placeholder={expireDate.placeholder}
            width={expireDate.width}
            maxLength={expireDate.maxLength}
            required
            onChange={(e) => onChange(e, expireDate.keyType)}
            isComplete={expireDate.value.length === 2}
          />
          {expireDate.name === "month" && <p>/</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

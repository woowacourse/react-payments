import { Fragment } from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

export default function CardExpireDateInput({ expireDate, onChange }) {
  const { expireDateLabelInfo, expireDateInfo } = expireDate;
  const expireDateList = Object.values(expireDateInfo);
  const expireDateLength = expireDateList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={expireDateLabelInfo.labelText}
      wrapperWidth={expireDateLabelInfo.wrapperWidth}
      horizontalAlign={expireDateLabelInfo.horizontalAlign}
      errorMessage={expireDateLabelInfo.errorMessage}
      isComplete={expireDateLength === CARD_INFO_RULES.EXPIRE_DATE_LENGTH}
    >
      {expireDateList.map((expireDate) => (
        <Fragment key={expireDate.name}>
          <Input
            dataTargetGroup={expireDate.className}
            className={expireDate.className}
            name={expireDate.name}
            value={expireDate.value}
            type={expireDate.type}
            placeholder={expireDate.placeholder}
            width={expireDate.width}
            maxLength={expireDate.maxLength}
            required={expireDate.required}
            onChange={(e) => onChange(e, expireDate.keyType)}
            isComplete={expireDate.value.length === 2}
          />
          {expireDate.name === "month" && <p>/</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

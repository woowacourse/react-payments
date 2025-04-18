import styles from "./CardExpireDateInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { EXPIRE_DATE_KEYS, EXPIRE_DATE_LENGTH } from "../../constants";
import type { ExpireDateState } from "../../types";

export interface CardExpireDateInputsProps {
  expireDate: ExpireDateState;
  handleExpireMonthChange: (value: string) => void;
  handleExpireYearChange: (value: string) => void;
  handleExpireMonthBlur: (value: string) => void;
}

function CardExpireDateInputs({
  expireDate,
  handleExpireMonthChange,
  handleExpireYearChange,
  handleExpireMonthBlur,
}: CardExpireDateInputsProps) {
  const changeEvent = {
    MM: handleExpireMonthChange,
    YY: handleExpireYearChange,
  };

  return (
    <div className={styles.container}>
      <div className={styles.expireDateInputContainer}>
        {EXPIRE_DATE_KEYS.map((expireKey, idx) => (
          <p className={styles.expireDateInputBox} key={expireKey}>
            <Label htmlFor={`expire-${expireKey}-input`} isHidden={idx !== 0}>
              유효 기간
            </Label>
            <Input
              id={`expire-${expireKey}-input`}
              type="text"
              maxLength={EXPIRE_DATE_LENGTH}
              placeholder={expireKey}
              isError={Boolean(expireDate[expireKey].errorMessage)}
              value={expireDate[expireKey].value}
              onChange={(e) => changeEvent[expireKey](e.target.value)}
              onBlur={
                expireKey === "MM"
                  ? (e) => handleExpireMonthBlur(e.target.value)
                  : undefined
              }
            />
            <span
              id={`${expireKey}-error-message`}
              className={styles.errorMessage}
            >
              {expireDate[expireKey].errorMessage}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default CardExpireDateInputs;

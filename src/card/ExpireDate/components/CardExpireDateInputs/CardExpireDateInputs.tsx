import styles from "./CardExpireDateInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { EXPIRE_DATE_KEYS } from "../../constants";
import type { ExpireDateInputRefs, ExpireDateState } from "../../types";

export interface CardExpireDateInputsProps {
  expireDate: ExpireDateState;
  expireDateInputRefs: ExpireDateInputRefs;
  handleExpireMonthChange: (value: string) => void;
  handleExpireYearChange: (value: string) => void;
  handleExpireMonthBlur: (value: string) => void;
}

function CardExpireDateInputs({
  expireDate,
  expireDateInputRefs,
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
          <div className={styles.expireDateBox} key={expireKey}>
            <p className={styles.expireDateInputBox}>
              <Label htmlFor={`expire-${expireKey}-input`} isHidden={idx !== 0}>
                유효 기간
              </Label>
              <Input
                ref={expireDateInputRefs[expireKey]}
                autoFocus={idx === 0}
                id={`expire-${expireKey}-input`}
                type="text"
                inputMode="numeric"
                maxLength={2}
                pattern="[0-9]*"
                required
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
            </p>
            {expireDate[expireKey].errorMessage && (
              <span
                id={`${expireKey}-error-message`}
                className={styles.errorMessage}
              >
                {expireDate[expireKey].errorMessage}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpireDateInputs;

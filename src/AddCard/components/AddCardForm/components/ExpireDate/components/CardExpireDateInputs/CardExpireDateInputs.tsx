import { forwardRef } from "react";
import styles from "./CardExpireDateInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { EXPIRE_DATE_KEYS, EXPIRE_DATE_LENGTH } from "../../constants";
import { ExpireDateInputKey, type ExpireDateState } from "../../types";
import { useAutoFocus } from "../../../../../../hooks/useAutoFocus";

export interface CardExpireDateInputsProps {
  expireDate: ExpireDateState;
  handleExpireMonthChange: (value: string) => void;
  handleExpireYearChange: (value: string) => void;
  handleExpireMonthBlur: (value: string) => void;
}

const CardExpireDateInputs = forwardRef<
  HTMLInputElement,
  CardExpireDateInputsProps
>(
  (
    {
      expireDate,
      handleExpireMonthChange,
      handleExpireYearChange,
      handleExpireMonthBlur,
    },
    ref
  ) => {
    const { inputRefs, handleAutoFocus } =
      useAutoFocus<ExpireDateInputKey>(EXPIRE_DATE_KEYS);

    const changeHandlers = {
      MM: handleExpireMonthChange,
      YY: handleExpireYearChange,
    };

    const handleInputChange = (key: ExpireDateInputKey, value: string) => {
      changeHandlers[key](value);
      handleAutoFocus(key, value, EXPIRE_DATE_KEYS, EXPIRE_DATE_LENGTH);
    };

    return (
      <div className={styles.container}>
        <div className={styles.expireDateInputContainer}>
          {EXPIRE_DATE_KEYS.map((expireKey, idx) => {
            return (
              <p className={styles.expireDateInputBox} key={expireKey}>
                <Label
                  htmlFor={`expire-${expireKey}-input`}
                  isHidden={idx !== 0}
                >
                  유효 기간
                </Label>
                <Input
                  ref={idx === 0 ? ref : inputRefs[expireKey]}
                  id={`expire-${expireKey}-input`}
                  type="text"
                  maxLength={EXPIRE_DATE_LENGTH}
                  placeholder={expireKey}
                  isError={Boolean(expireDate[expireKey].errorMessage)}
                  value={expireDate[expireKey].value}
                  onChange={(e) => handleInputChange(expireKey, e.target.value)}
                  onBlur={
                    idx === 0
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
            );
          })}
        </div>
      </div>
    );
  }
);

CardExpireDateInputs.displayName = "CardExpireDateInputs";

export default CardExpireDateInputs;

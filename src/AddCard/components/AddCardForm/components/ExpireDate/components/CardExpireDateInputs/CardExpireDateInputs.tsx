import styles from "./CardExpireDateInputs.module.css";
import Input from "../../../../../../../components/Input/Input";
import Label from "../../../../../../../components/Label/Label";

import { ExpireDateState } from "../../types";

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
  const { MM, YY } = expireDate;

  return (
    <div className={styles.container}>
      <Label htmlFor="expire-date-input">유효 기간</Label>
      <p className={styles.expireDateInputContainer}>
        <p className={styles.expireDateInputBox}>
          <Input
            id="expire-date-input"
            type="text"
            maxLength={2}
            placeholder="MM"
            isError={Boolean(MM.errorMessage)}
            value={MM.value}
            onChange={(e) => handleExpireMonthChange(e.target.value)}
            onBlur={(e) => handleExpireMonthBlur(e.target.value)}
          />
          {MM.errorMessage && (
            <span id="month-error-message" className={styles.errorMessage}>
              {MM.errorMessage}
            </span>
          )}
        </p>
        <p className={styles.expireDateInputBox}>
          <Input
            id="expire-date-input"
            type="text"
            maxLength={2}
            placeholder="YY"
            isError={Boolean(YY.errorMessage)}
            value={YY.value}
            onChange={(e) => handleExpireYearChange(e.target.value)}
          />
          {YY.errorMessage && (
            <span id="year-error-message" className={styles.errorMessage}>
              {YY.errorMessage}
            </span>
          )}
        </p>
      </p>
    </div>
  );
}

export default CardExpireDateInputs;

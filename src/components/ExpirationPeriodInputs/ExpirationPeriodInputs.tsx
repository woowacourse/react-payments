import { ChangeEvent } from "react";
import Input from "../Input/Input";
import {
  PeriodPositionType,
  PERIOD_POSITION,
  MAGIC_NUMBER,
} from "../../constants/constants";
import { InputErrorType } from "../../hooks/useInputError";

interface ExpirationPeriodInputsProps {
  expirationPeriod: Record<PeriodPositionType, string>;
  error: InputErrorType["expirationPeriod"];
  handleExpirationPeriodChange: (
    value: string,
    position: PeriodPositionType
  ) => void;
}

const month = MAGIC_NUMBER.placeholders.month;
const year = MAGIC_NUMBER.placeholders.year;
const maxLength = MAGIC_NUMBER.maxLength.expirationPeriod;

function ExpirationPeriodInputs({
  expirationPeriod,
  error,
  handleExpirationPeriodChange,
}: ExpirationPeriodInputsProps) {
  return (
    <>
      <Input
        placeholder={month}
        maxLength={maxLength}
        isError={error.month}
        value={expirationPeriod.month}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleExpirationPeriodChange(e.target.value, PERIOD_POSITION.month)
        }
      />
      <Input
        placeholder={year}
        maxLength={maxLength}
        isError={error.year}
        value={expirationPeriod.year}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleExpirationPeriodChange(e.target.value, PERIOD_POSITION.year)
        }
      />
    </>
  );
}

export default ExpirationPeriodInputs;

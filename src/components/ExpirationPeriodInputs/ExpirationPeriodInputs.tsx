import { ChangeEvent } from "react";
import Input from "../Input/Input";
import { PeriodPositionType, PERIOD_POSITION } from "../../constants/constants";
import { InputErrorType } from "../../hooks/useInputError";

interface ExpirationPeriodInputsProps {
  expirationPeriod: Record<PeriodPositionType, string>;
  error: InputErrorType["expirationPeriod"];
  handleExpirationPeriodChange: (
    value: string,
    position: PeriodPositionType
  ) => void;
}

function ExpirationPeriodInputs({
  expirationPeriod,
  error,
  handleExpirationPeriodChange,
}: ExpirationPeriodInputsProps) {
  return (
    <>
      <Input
        placeholder="MM"
        maxLength={2}
        isError={error.month}
        value={expirationPeriod.month}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleExpirationPeriodChange(e.target.value, PERIOD_POSITION.month)
        }
      />
      <Input
        placeholder="YY"
        maxLength={2}
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

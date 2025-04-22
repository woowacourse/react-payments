import { ChangeEvent } from "react";
import {
  PERIOD_POSITION,
  PeriodPositionType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import { CardValidationType } from "../../../../hooks/useCardValidation";
import Input from "../../../Common/Input/Input";

const periodPositions = Object.values(PERIOD_POSITION);

const PLACEHOLDERS = {
  month: "MM",
  year: "YY",
};
const MAX_LENGTHS = 2;

export interface CardExpirationPeriodInputProps {
  expirationPeriodErrors: CardValidationType["expirationPeriod"];
  validateExpirationPeriod: (
    value: string,
    position: PeriodPositionType
  ) => void;
}

export default function CardExpirationPeriodInput({
  expirationPeriodErrors,
  validateExpirationPeriod,
}: CardExpirationPeriodInputProps) {
  const { expirationPeriod, updateExpirationPeriod } = useCard();

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
  };

  return (
    <>
      {periodPositions.map((position) => {
        return (
          <Input
            key={position}
            placeholder={PLACEHOLDERS[position]}
            maxLength={MAX_LENGTHS}
            isError={expirationPeriodErrors[position]}
            value={expirationPeriod[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleExpirationPeriodChange(e.target.value, position)
            }
          />
        );
      })}
    </>
  );
}

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
  error: CardValidationType;
  setError: (value: string, position: PeriodPositionType) => void;
}

export default function CardExpirationPeriodInput({
  error, // TODO: 관련된 에러 상태만 넘겨주기
  setError,
}: CardExpirationPeriodInputProps) {
  const { expirationPeriod, updateExpirationPeriod } = useCard();

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    setError(value, position);
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
            isError={error.expirationPeriod[position]}
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

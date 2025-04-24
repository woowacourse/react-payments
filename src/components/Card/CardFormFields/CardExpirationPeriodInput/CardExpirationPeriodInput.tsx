import { ChangeEvent } from "react";
import {
  EXPIRATION_PERIOD_SEGMENT,
  ExpirationPeriodSegmentType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

const periodPositions = Object.values(EXPIRATION_PERIOD_SEGMENT);

const PLACEHOLDERS = {
  month: "MM",
  year: "YY",
};
const MAX_LENGTHS = 2;

export default function CardExpirationPeriodInput() {
  const { expirationPeriod, updateExpirationPeriod } = useCard();
  const { expirationPeriodErrors, validateExpirationPeriod } =
    useCardValidation();

  const handleExpirationPeriodChange = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
  };

  return (
    <CardFormFieldCSS>
      {periodPositions.map((position) => {
        return (
          <Input
            key={position}
            placeholder={PLACEHOLDERS[position]}
            maxLength={MAX_LENGTHS}
            isError={expirationPeriodErrors.hasError[position]}
            value={expirationPeriod[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleExpirationPeriodChange(e.target.value, position)
            }
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              handleExpirationPeriodChange(e.target.value, position)
            }
          />
        );
      })}
    </CardFormFieldCSS>
  );
}

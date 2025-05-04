import { ChangeEvent } from "react";
import {
  EXPIRATION_PERIOD_SEGMENT,
  MAX_LENGTH,
  PLACEHOLDER,
} from "../../../../constants/card";
import { useCard } from "../../../../hooks/useCard";
import { useCardValidation } from "../../../../hooks/useCardValidation";
import useFieldFocus from "../../../../hooks/useFieldFocus";
import { ExpirationPeriodSegmentType } from "../../../../types/card";
import Input from "../../../Common/Input/Input";
import { CardFormFieldStyles } from "../CardFormFields.styled";

const periodPositions = Object.values(EXPIRATION_PERIOD_SEGMENT);

const expirationPeriodSequence = [
  "expirationPeriod-month",
  "expirationPeriod-year",
];

export default function CardExpirationPeriodInput() {
  const { expirationPeriod, updateExpirationPeriod } = useCard();
  const { expirationPeriodError, validateExpirationPeriod } =
    useCardValidation();
  const { registerRef, handleInputChange } = useFieldFocus(
    expirationPeriodSequence
  );

  const handleExpirationPeriodChange = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
    handleInputChange(`expirationPeriod-${position}`);
  };

  return (
    <CardFormFieldStyles>
      {periodPositions.map((position, index) => {
        return (
          <Input
            key={position}
            placeholder={PLACEHOLDER.expirationPeriod[position]}
            maxLength={MAX_LENGTH.expirationPeriod}
            isError={expirationPeriodError.hasError[position]}
            value={expirationPeriod[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleExpirationPeriodChange(e.target.value, position)
            }
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              handleExpirationPeriodChange(e.target.value, position)
            }
            ref={(element) =>
              registerRef(`expirationPeriod-${position}`, element)
            }
            autoFocus={index === 0}
          />
        );
      })}
    </CardFormFieldStyles>
  );
}

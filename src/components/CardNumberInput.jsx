import { Fragment } from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

export default function CardNumberInput(props) {
  const { cardNumber, onChange } = props;
  const { cardLabelInfo, cardNumberInfo } = cardNumber;

  const cardNumberList = Object.values(cardNumberInfo);
  const cardNumberLength = cardNumberList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={cardLabelInfo.labelText}
      wrapperWidth={cardLabelInfo.cardLabelWidth}
      horizontalAlign={cardLabelInfo.horizontalAlign}
      errorMessage={cardLabelInfo.errorMessage}
      isComplete={
        cardNumberLength ===
        CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH
      }
    >
      {cardNumberList.map((cardNumber) => (
        <Fragment key={cardNumber.index}>
          <Input
            dataTargetGroup={cardNumber.className}
            className={cardNumber.className}
            name={cardNumber.name}
            value={cardNumber.value}
            type={cardNumber.type}
            placeholder={cardNumber.placeholder}
            maxLength={cardNumber.maxLength}
            autoFocus={cardNumber.index === 0}
            required={cardNumber.required}
            onChange={(e) => onChange(e, cardNumber.keyType)}
            isComplete={
              cardNumber.value.length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
            }
          />
          {cardNumber.index !== 3 && <p>-</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

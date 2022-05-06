import { Fragment } from "react";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../../constants/constants";

export default function CardNumberInput(props) {
  const { cardNumber, onChange } = props;

  const cardNumberList = Object.values(cardNumber);
  const cardNumberLength = cardNumberList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={"카드번호"}
      wrapperWidth={"100%"}
      horizontalAlign={"space-around"}
      errorMessage={"카드 번호는 0~9까지 숫자로 입력해주세요."}
      isComplete={
        cardNumberLength ===
        CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH
      }
    >
      {cardNumberList.map((cardNumber, index) => (
        <Fragment key={cardNumber.keyType}>
          <Input
            name={"cardNumber"}
            className={"cardNumber"}
            value={cardNumber.value}
            type={index < 2 ? "number" : "password"}
            placeholder={index < 2 ? "1 2 3 4" : "• • • •"}
            maxLength={4}
            autoFocus={cardNumber.keyType === "firstCardNumber"}
            required
            onChange={(e) => onChange(e, cardNumber.keyType)}
            isComplete={
              cardNumber.value.length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
            }
          />
          {cardNumber.keyType !== "fourthCardNumber" && <p>-</p>}
        </Fragment>
      ))}
    </InputField>
  );
}

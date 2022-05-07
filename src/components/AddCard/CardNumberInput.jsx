import { Fragment, useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";

export default function CardNumberInput() {
  const {
    state: { cardNumber },
    actions: { handleCardNumberUpdate },
  } = useContext(CardInfoContext);

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
      guideMessage={GUIDE_MESSAGE.VALID_CARD_NUMBER}
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
            type={
              index < CARD_INFO_RULES.NUMBER_UNIT_COUNT / 2
                ? "number"
                : "password"
            }
            placeholder={
              index < CARD_INFO_RULES.NUMBER_UNIT_COUNT / 2
                ? "1 2 3 4"
                : "• • • •"
            }
            maxLength={CARD_INFO_RULES.NUMBER_UNIT_LENGTH}
            autoFocus={cardNumber.keyType === "firstCardNumber"}
            required
            onChange={(e) => handleCardNumberUpdate(e, cardNumber.keyType)}
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

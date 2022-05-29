import { Fragment } from "react";
import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";
import { CARD_INFO_RULES, GUIDE_MESSAGE } from "../../constants/constants";
import { setCardNumber } from "../../reducer/cardReducer";
import { isInValidCardNumber } from "../../validators/validator";
import { ICardNumberState } from "../../types/cardInfoState";
import useUpdateHandler from "../../hooks/useUpdateHandler";

export default function CardNumberInput({
  cardNumber,
  dispatch,
}: {
  cardNumber: ICardNumberState;
  dispatch: React.Dispatch<any>;
}) {
  const { updateHandler } = useUpdateHandler(
    dispatch,
    setCardNumber,
    isInValidCardNumber
  );

  const cardNumberList = Object.entries(cardNumber);
  const cardNumberLength = cardNumberList.reduce(
    (sum, currentCardNumber) => currentCardNumber[1].length + sum,
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
      {cardNumberList.map((cardNumber, index) => {
        const [cardNumberKey, cardNumberValue] = cardNumber;
        return (
          <Fragment key={cardNumberKey}>
            <Input
              name={"cardNumber"}
              className={"cardNumber"}
              value={cardNumberValue}
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
              autoFocus={cardNumberKey === "firstCardNumber"}
              required
              onChange={(e) => updateHandler(e, cardNumberKey)}
              isComplete={
                cardNumberValue.length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              }
            />
            {cardNumberKey !== "fourthCardNumber" && <p>-</p>}
          </Fragment>
        );
      })}
    </InputField>
  );
}

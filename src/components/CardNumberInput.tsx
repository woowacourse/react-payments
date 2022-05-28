import React, { useCallback, useContext, useState } from "react";

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";
import { CardInfoContext } from "context/CardInfoContextProvider";
import { OrderedInputUpdateHandlerInterface } from "./CardInputInterface";

export default function CardNumberInput() {
  const [isInvalid, setInvalid] = useState(false);
  const { state, setState } = useContext(CardInfoContext);

  const { cardNumber } = state;

  const handleInputChange: OrderedInputUpdateHandlerInterface =
    (order) =>
    ({ target: { value } }) => {
      setInvalid(false);

      const newCardNumber = [...cardNumber];
      newCardNumber[order] = value;

      setState({ payload: { cardNumber: newCardNumber } });
    };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <InputField
      labelText={"카드 번호"}
      wrapperWidth={"full"}
      horizontalAlign={"space-around"}
      isInvalid={isInvalid}
      isComplete={
        cardNumber.join("").length ===
        CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH
      }
    >
      {Array.from({ length: CARD_INFO_RULES.NUMBER_UNIT_COUNT }).map(
        (_, index) => (
          <React.Fragment key={index}>
            <Input
              type={index <= 1 ? "text" : "password"}
              value={cardNumber[index]}
              placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
              name={`cardNumber${index + 1}`}
              maxLength={4}
              required
              isComplete={
                cardNumber[index].length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              }
              onChange={handleInputChange(index)}
              onInvalid={triggerInvalid}
              pattern={"^[0-9]+$"}
              data-testid={"card-number"}
            />
            {index !== cardNumber.length - 1 && <p>-</p>}
          </React.Fragment>
        )
      )}
    </InputField>
  );
}

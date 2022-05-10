import React from "react";
import PropTypes from "prop-types";
import InputBox from "components/InputBox";
import { Input } from "components/Input/style";
import { CardInputWrapper } from "pages/style";
import { CARD_NUMBER } from "constant";
import { blockInputString } from "utils";

function CardNumberInput({
  cardNumbers,
  handleChangeCardNumber,
  cardNumberInputRefs,
}) {
  return (
    <CardInputWrapper>
      <label>카드번호</label>
      <InputBox>
        {Array.from({ length: CARD_NUMBER.INPUT_COUNT }, (_, index) => (
          <React.Fragment key={index}>
            <Input
              ref={cardNumberInputRefs[index]}
              type={index < 2 ? "number" : "password"}
              value={cardNumbers[index]}
              onChange={(e) => handleChangeCardNumber(index, e)}
              data-testid={`card-number-${index}`}
              onKeyDown={blockInputString}
            />
            {index < 3 && <span>-</span>}
          </React.Fragment>
        ))}
      </InputBox>
    </CardInputWrapper>
  );
}

CardNumberInput.propTypes = {
  handleChangeCardNumber: PropTypes.func,
  cardNumbers: PropTypes.array,
  cardNumberInputRefs: PropTypes.array,
};

export default CardNumberInput;

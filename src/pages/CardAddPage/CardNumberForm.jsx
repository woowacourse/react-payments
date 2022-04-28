import React from "react";
import InputBox from "../../components/InputBox";
import { Input } from "../../components/Input/style";
import { FormWrapper } from "./style";

function CardNumberForm({
  cardNumbers,
  handleCardNumber,
  cardNumberInputRefs,
}) {
  return (
    <FormWrapper>
      <label>카드번호</label>
      <InputBox>
        {Array.from({ length: 4 }, (_, index) => (
          <React.Fragment key={index}>
            <Input
              ref={cardNumberInputRefs[index]}
              type={index < 2 ? "number" : "password"}
              value={cardNumbers[index]}
              onChange={(e) => handleCardNumber(index, e)}
            />
            {index < 3 && <span>-</span>}
          </React.Fragment>
        ))}
      </InputBox>
    </FormWrapper>
  );
}

export default CardNumberForm;

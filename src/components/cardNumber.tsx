import styled from "styled-components";

import { useContext, useEffect } from "react";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { useError } from "../hooks/useError";
import { validation } from "../validation";
import { NumberContext } from "../contexts/cardInfo";
import { ValidateContext } from "../contexts/validate";

export function CardNumber() {
  const { cardNumber, handleChange } = useContext(NumberContext);
  const { error, handleError } = useError();
  const { valid, changeValid } = useContext(ValidateContext);

  useEffect(() => {
    changeValid("validCardNumber", error);
  }, [
    cardNumber.first,
    cardNumber.second,
    cardNumber.third,
    cardNumber.fourth,
  ]);

  return (
    <Wrapper>
      <InputBox type={"NUMBER"} error={error}>
        {Object.keys(cardNumber).map((cardInput, index, original) => {
          return (
            <>
              <Input
                key={cardInput}
                handleChange={handleChange}
                handleError={() =>
                  handleError(
                    Object.values(cardNumber).join(""),
                    validation.isNumber
                  )
                }
                name={cardInput}
                type={
                  cardInput === "third" || cardInput === "fourth"
                    ? "password"
                    : "text"
                }
                maxLength={4}
              />
              {index < original.length - 1 && "-"}
            </>
          );
        })}
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 31.8rem;
`;

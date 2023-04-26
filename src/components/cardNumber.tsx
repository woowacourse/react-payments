import styled from "styled-components";
import { useContext } from "react";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { NumberContext, RefContext } from "../contexts/cardInfo";
import { InputGroup } from "./common/inputGroup";
import { InputLabel } from "./common/inputLabel";
import { LABEL } from "../constants/inputInfo";

export function CardNumber() {
  const { cardNumber, handleChange } = useContext(NumberContext);
  const inputRef = useContext(RefContext);

  function checkIsPasswordType(name: string) {
    return name === "third" || name === "fourth";
  }

  return (
    <InputBox inputState={{ value: cardNumber, handleChange: handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.NUMBER} />
        <InputGroup>
          {Object.keys(cardNumber).map((cardInput, index, original) => {
            return (
              <>
                <Input
                  key={cardInput}
                  name={cardInput}
                  type={checkIsPasswordType(cardInput) ? "password" : "text"}
                  maxLength={4}
                  minLength={4}
                  inputRef={inputRef}>
                  <CustomInput />
                </Input>
                {index < original.length - 1 && "-"}
              </>
            );
          })}
        </InputGroup>
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 31.8rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;

const CustomInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;

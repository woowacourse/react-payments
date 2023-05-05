import styled from "styled-components";
import { Fragment } from "react";
import { Input } from "../../@common/input/InputBox";
import { INPUT_TYPE, LABEL } from "../../../constants/inputInfo";
import { CardNumberIndex } from "../../../type/input";
import { useCardInfoContext } from "../../../hooks/useCardInfoContext";

export function CardNumber() {
  const { cardNumber, changeNumberInput } = useCardInfoContext();

  function checkIsPasswordType(name: string) {
    return name === "third" || name === "fourth";
  }

  return (
    <Input<CardNumberIndex>
      inputState={{ value: cardNumber, handleChange: changeNumberInput }}>
      <Wrapper>
        <Input.Label>
          <div>{LABEL.NUMBER}</div>
        </Input.Label>
        <Input.Group>
          {Object.keys(cardNumber).map((cardInput, index, original) => {
            return (
              <Fragment key={cardInput}>
                <Input.Unit
                  name={cardInput}
                  type={
                    checkIsPasswordType(cardInput)
                      ? INPUT_TYPE.PASSWORD
                      : INPUT_TYPE.TEXT
                  }
                  maxLength={4}
                  minLength={4}
                  asChild>
                  <CustomInput />
                </Input.Unit>
                {index < original.length - 1 && INPUT_TYPE.BAR}
              </Fragment>
            );
          })}
        </Input.Group>
      </Wrapper>
    </Input>
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

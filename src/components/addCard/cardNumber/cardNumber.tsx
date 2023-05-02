import styled from "styled-components";
import { Fragment, useContext } from "react";
import { Input } from "../../@common/input/Input";
import { InputBox } from "../../@common/input/InputBox";
import { NumberContext } from "../../../contexts/cardInfo";
import { InputGroup } from "../../@common/input/inputGroup";
import { InputLabel } from "../../@common/input/inputLabel";
import { INPUT_TYPE, LABEL } from "../../../constants/inputInfo";
import { CardNumberIndex } from "../../../type/input";

export function CardNumber() {
  const { cardNumber, handleChange } = useContext(NumberContext);

  function checkIsPasswordType(name: string) {
    return name === "third" || name === "fourth";
  }

  return (
    <InputBox<CardNumberIndex>
      inputState={{ value: cardNumber, handleChange: handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.NUMBER} />
        <InputGroup>
          {Object.keys(cardNumber).map((cardInput, index, original) => {
            return (
              <Fragment key={cardInput}>
                <Input
                  name={cardInput}
                  type={
                    checkIsPasswordType(cardInput)
                      ? INPUT_TYPE.PASSWORD
                      : INPUT_TYPE.TEXT
                  }
                  maxLength={4}
                  minLength={4}>
                  <CustomInput />
                </Input>
                {index < original.length - 1 && INPUT_TYPE.BAR}
              </Fragment>
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

import { useContext } from "react";
import styled from "styled-components";
import { LABEL, TEXT_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { NameContext, RefContext } from "../contexts/cardInfo";
import { useCountText } from "../hooks/useCountText";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { InputLabel } from "./common/inputLabel";

export function UserName() {
  const { userName, handleChange } = useContext(NameContext);
  const inputRef = useContext(RefContext);
  const { count, countText } = useCountText();

  function renderCountText() {
    return <div>{count}/30</div>;
  }

  return (
    <InputBox inputState={{ userName, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.NAME} render={renderCountText} />
        <Input
          maxLength={30}
          placeholder={PLACEHOLDER.NAME}
          name="name"
          inputRef={inputRef}
          onChange={countText}
          asChild>
          <NameInput />
        </Input>
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 31.8rem;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;
  margin-top: 0.5rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;

import { useEffect } from "react";
import styled from "styled-components";
import { INPUT_TYPE, LABEL, PLACEHOLDER } from "../../../constants/inputInfo";
import { useCardInfoContext } from "../../../hooks/useCardInfoContext";
import { useCountText } from "../../../hooks/useCountText";
import { Input } from "../../@common/input/Input";
import { InputBox } from "../../@common/input/InputBox";
import { InputLabel } from "../../@common/input/inputLabel";

export function UserName() {
  const { userName, changeNameInput } = useCardInfoContext();
  const { count, countText } = useCountText();

  useEffect(() => {
    countText(userName);
  }, [count]);

  function renderCountText() {
    return (
      <div>
        {count}/{INPUT_TYPE.MAX_LENGTH}
      </div>
    );
  }

  return (
    <InputBox<string>
      inputState={{ value: userName, handleChange: changeNameInput }}>
      <Wrapper>
        <InputLabel text={LABEL.NAME} render={renderCountText} />
        <Input
          maxLength={INPUT_TYPE.MAX_LENGTH}
          placeholder={PLACEHOLDER.NAME}
          name="name"
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

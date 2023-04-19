import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";

type CardOwnerNameInputProp = {
  nameLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardOwnerNameInput = ({ onChange, nameLength }: CardOwnerNameInputProp) => {
  return (
    <Label>
      <Div>
        <span>카드 소유자 이름(선택)</span>
        <span>{nameLength} / 30</span>
      </Div>
      <InputContainer width="318px">
        <Input
          width="100%"
          textAlign="left"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          maxLength={30}
          required
          onChange={onChange}
        />
      </InputContainer>
    </Label>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;

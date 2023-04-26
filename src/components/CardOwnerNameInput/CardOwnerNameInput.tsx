import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { isAlphabetic } from "../../validator/Validator";

type CardOwnerNameInputProp = {
  ownerName: string;
  onChange: (name: string) => void;
};

const CardOwnerNameInput = ({ ownerName, onChange }: CardOwnerNameInputProp) => {
  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (!isAlphabetic(name)) return;

    onChange(name);
  };

  return (
    <Label>
      <Div>
        <span>카드 소유자 이름</span>
        <span>{ownerName.length} / 30</span>
      </Div>
      <InputContainer width="318px">
        <Input
          value={ownerName}
          width="100%"
          textAlign="left"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          maxLength={30}
          onChange={handleOwnerName}
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

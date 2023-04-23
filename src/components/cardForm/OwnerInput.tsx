import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";
import { useState } from "react";

interface OwnerInputProps {
  setOwner: (value: string) => void;
}

const OwnerInfo = {
  label: "owner",
  width: "318px",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  textPosition: "left",
  type: "text",
};

export const OwnerInput = ({ setOwner }: OwnerInputProps) => {
  const [ownerLength, setOwnerLength] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > CARD_INPUT_NUMBER.OWNER) {
      e.target.value = value.slice(0, -1);
      return;
    }

    e.target.value = value.toUpperCase();

    setOwner(e.target.value);
    setOwnerLength(value.length);
  };

  return (
    <InputContainer>
      <Row>
        <InputLabel text="카드 소유자 이름 (선택)" name="owner" />
        <InputLabel text={`${ownerLength}/30`} name="ownerLength" />
      </Row>
      <Input
        {...OwnerInfo}
        handleInput={handleInput}
        handleChange={(e) => {}}
      />
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

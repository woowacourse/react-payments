import styled from "styled-components";
import { InputContainer, Input, InputLabel } from "../common";
import { INPUT_FULL_LENGTH } from "../../constant/cardInput";
import { useState } from "react";

interface OwnerInputProps {
  setOwner: (value: string) => void;
}

const OwnerInfo = {
  label: "owner",
  $width: "318px",
  $textPosition: "left",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  type: "text",
};

export const OwnerInput = ({ setOwner }: OwnerInputProps) => {
  const [ownerLength, setOwnerLength] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > INPUT_FULL_LENGTH.OWNER) {
      e.target.value = value.slice(0, -1);
      return;
    }

    e.target.value = value.toUpperCase();

    setOwnerLength(value.length);
    setOwner(e.target.value);
  };

  return (
    <InputContainer>
      <Row>
        <InputLabel text="카드 소유자 이름 (선택)" name="owner" />
        <InputLabel text={`${ownerLength}/30`} name="ownerLength" />
      </Row>
      <Input {...OwnerInfo} handleInput={handleInput} />
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

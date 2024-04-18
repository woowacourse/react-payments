import { useState } from "react";
import styled from "styled-components";

import Label from "../common/Label";
import Input from "../common/Input";

import { VALIDATION_MESSAGES } from "../../constants/card-app";

interface CardOwnerNameInputProps {
  ownerName: string;
  errorCaption: (errorText: string) => JSX.Element;
  handleCardOwnerNameChange: (value: string) => void;
}

const CardOwnerNameInput = ({
  ownerName,
  errorCaption,
  handleCardOwnerNameChange,
}: CardOwnerNameInputProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    const isAlphabetInput = /^[a-zA-Z ]*$/.test(value);
    const isValidOwnerName = value.length <= 15;

    setIsError(!isAlphabetInput || !isValidOwnerName);

    if (!isAlphabetInput || !isValidOwnerName) return;

    handleCardOwnerNameChange(value.toUpperCase());
  };

  return (
    <InputField>
      <Label htmlFor="card-owner">소유자 이름</Label>
      <Input
        id="card-owner"
        type="text"
        placeholder="JOHN DOE"
        value={ownerName}
        size="large"
        isError={isError}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      {isError
        ? errorCaption(VALIDATION_MESSAGES.invalidOwnerName)
        : errorCaption("")}
    </InputField>
  );
};

export default CardOwnerNameInput;

const InputField = styled.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;

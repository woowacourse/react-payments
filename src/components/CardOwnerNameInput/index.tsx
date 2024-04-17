import Label from "../common/Label";
import Input from "../common/Input";
import { useState } from "react";

interface CardOwnerNameInputProps {
  ownerName: string;
  handleCardOwnerNameChange: (value: string) => void;
  errorCaption: () => JSX.Element;
}

const CardOwnerNameInput = ({
  ownerName,
  errorCaption,
  handleCardOwnerNameChange,
}: CardOwnerNameInputProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    const isError = !/^[a-zA-Z ]*$/.test(value);

    if (isError) {
      setIsError(isError);
      return;
    }

    setIsError((prev) => !prev);
    handleCardOwnerNameChange(value.toUpperCase());
  };

  return (
    <>
      <Label htmlFor="card-owner">소유자 이름</Label>
      <Input
        value={ownerName}
        id="card-owner"
        size="large"
        type="text"
        placeholder="JOHN DOE"
        isError={false}
        maxLength={30}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      {isError && errorCaption()}
    </>
  );
};

export default CardOwnerNameInput;

import { useRef, useState } from "react";
import Label from "../common/Label";
import styled from "styled-components";
import Input from "../common/Input";

import cardInputValidator from "../../validators/cardInputValidator";

type ExpirationDate = "YY" | "MM" | "DD";

interface ExpirationDateInputProps {
  dates: ExpirationDate[];
  errorCaption: (errorText: string) => JSX.Element;
  handleExpirationDateChange: (index: number, value: string) => void;
}

const ExpirationDateInput = ({
  dates,
  errorCaption,
  handleExpirationDateChange,
}: ExpirationDateInputProps) => {
  const [inputErrors, setInputErrors] = useState<boolean[]>(
    Array.from<boolean>({ length: dates.length }).fill(false)
  );

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (index: number, value: string) => {
    if (!monthRef.current || !yearRef.current) return;

    const isValidDate = cardInputValidator.validateExpiration([
      monthRef.current.value,
      yearRef.current.value,
    ]);

    setInputErrors((prevErrors) => {
      const newPrevErrors = [...prevErrors];
      newPrevErrors[index] = !isValidDate;
      return newPrevErrors;
    });

    handleExpirationDateChange(index, value);
  };

  const hasErrorInput = () => inputErrors.some((error) => error);

  return (
    <>
      <Label htmlFor="expiration-date">유효기간</Label>
      <InputContainer>
        <Input
          ref={monthRef}
          id="car"
          key={`input-0`}
          size="medium"
          type="text"
          placeholder={dates[0]}
          maxLength={2}
          isError={inputErrors[0]}
          onChange={(e) => {
            handleInputChange(0, e.target.value);
          }}
        />
        <Input
          ref={yearRef}
          key={`input-1`}
          size="medium"
          type="text"
          placeholder={dates[1]}
          maxLength={2}
          isError={inputErrors[1]}
          onChange={(e) => {
            handleInputChange(1, e.target.value);
          }}
        />
      </InputContainer>
      {hasErrorInput() && errorCaption("유효한 날짜만 입력 가능합니다.")}
    </>
  );
};

export default ExpirationDateInput;

const InputContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

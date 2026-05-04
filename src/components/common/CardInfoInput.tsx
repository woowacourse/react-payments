import styled from "@emotion/styled";
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useId,
} from "react";

interface CardInfoInputProps {
  inputLabel: string;
  inputConfig: { placeholder: string; maxLength: number }[];
  inputValue: string[];
  setInputValue: Dispatch<SetStateAction<string[]>>;
  // validate: () => void;
  // errorMessage: string;
}

export default function CardInfoInput({
  inputLabel,
  inputConfig,
  inputValue,
  setInputValue,
  // validate,
  // errorMessage,
}: CardInfoInputProps) {
  const idPrefix = useId();

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // validate();
    setInputValue((prev) => {
      const newArray = [...prev];
      newArray[index] = newValue;
      return newArray;
    });
  };

  return (
    <CardInfoInputWrapper>
      <CardInfoInputLabel htmlFor={`${idPrefix}-0`}>
        {inputLabel}
      </CardInfoInputLabel>

      <InputContainer>
        {inputConfig.map((config, index) => (
          <CardInfo
            type="text"
            key={index}
            id={`${idPrefix}-${index}`}
            {...config}
            value={inputValue[index]}
            onChange={(e) => handleChange(index, e)}
          />
        ))}
      </InputContainer>

      {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
    </CardInfoInputWrapper>
  );
}

const CardInfoInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const CardInfoInputLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  vertical-align: middle;
  color: rgba(10, 13, 19, 1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const CardInfo = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
`;

// const ErrorMessage = styled.p`
//   padding: 0;
//   margin: 8px 0;
//   font-size: 9.5px;
//   font-weight: 400;
//   line-height: 100%;
//   letter-spacing: 0%;
//   vertical-align: middle;
//   color: rgba(255, 61, 61, 1);
// `;

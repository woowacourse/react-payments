import styled from "@emotion/styled";
import { useId } from "react";

interface CardInfoInputProps {
  inputLabel: string;
  inputConfig: { name: string; placeholder: string; maxLength: number }[];
  inputValue: string[];
  handleChange: (index: number, value: string, name: string) => void;
  errorMessage: string[];
}

export default function CardInfoInput({
  inputLabel,
  inputConfig,
  inputValue,
  handleChange,
  errorMessage,
}: CardInfoInputProps) {
  const idPrefix = useId();
  const displayError = errorMessage.find((value) => value !== "") || "";

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
            onChange={(e) => handleChange(index, e.target.value, config.name)}
            $hasError={!!errorMessage[index]}
          />
        ))}
      </InputContainer>

      {displayError && <ErrorMessage>{displayError}</ErrorMessage>}
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

const CardInfo = styled.input<{ $hasError: boolean }>`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const ErrorMessage = styled.p`
  padding: 0;
  margin: 0 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgba(255, 61, 61, 1);
`;

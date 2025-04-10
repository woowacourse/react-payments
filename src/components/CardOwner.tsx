import { useState } from "react";
import styled from "styled-components";

interface InputProps {
  isFocused: boolean;
  isError: boolean;
}

const CardInput = styled.input<InputProps>`
  border-radius: 4px;
  border: 2px solid;
  border-color: ${(props) => (props.isError ? "red" : props.isFocused ? "black" : "lightgray")};
  width: 100%;
  height: 30px;
  outline: none;
  text-transform: uppercase;
`;

const ErrorText = styled.h5`
  color: red;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
`;

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function CardOwner({ value, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Check if input contains only English letters and spaces
    if (!/^[A-Za-z\s]*$/.test(newValue)) {
      setIsError(true);
      return;
    }
    
    setIsError(false);
    onChange(newValue.toUpperCase());
  };

  return (
    <>
      <h2>카드 소유자 이름을 입력해 주세요</h2>
      <p>소유자 이름</p>
      <CardInput
        value={value}
        type="text"
        placeholder="JOHN DOE"
        onChange={handleChange}
        isFocused={isFocused}
        isError={isError}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <ErrorText style={{ display: isError ? "block" : "none" }}>
        영문자만 입력 가능합니다
      </ErrorText>
    </>
  );
}

export default CardOwner;

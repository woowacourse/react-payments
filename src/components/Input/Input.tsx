import styled from "@emotion/styled";
import { useState } from "react";

interface Props extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "type" | "onError"
> {
  value: string;
  setValue: (value: string) => void;
  // input에 에러메세지가 등장할 수 있는 경우에 border 색을 변경해주기 위한 용도의 isValid
  isValid: (value: string) => boolean;
  // InputGroup에 에러 메세지 피드백 제공을 위한 함수
  onError: (message: string | null) => void;
  filterOnlyNumber?: (value: string) => boolean;
}

interface InputStyleProps {
  isNotValidate: boolean;
}

export default function Input({
  setValue,
  isValid,
  onError,
  filterOnlyNumber,
  ...props
}: Props) {
  const [isNotValidate, setIsNotValidate] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tmpValue = e.target.value;
    if (filterOnlyNumber && !filterOnlyNumber(tmpValue)) {
      onError("숫자만 입력할 수 있습니다.");
      return;
    }

    setValue(tmpValue);
    onError(null);
    if (!isValid(tmpValue)) setIsNotValidate(true);
    else setIsNotValidate(false);
  };

  return (
    <StyledInput
      isNotValidate={isNotValidate}
      type="text"
      onChange={(e) => handleInputChange(e)}
      {...props}
    />
  );
}

const StyledInput = styled.input<InputStyleProps>`
  border: 1px solid ${(props) => (props.isNotValidate ? "#FF3D3D" : "#acacac")};
  &::placeholder {
    color: #acacac;
  }
  border-radius: 2px;
  height: 32px;

  padding: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #000000 !important;
  }
`;

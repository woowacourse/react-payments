import styled from "@emotion/styled";

interface Props extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onError"
> {
  value: string;
  onChange: (value: string) => void;
  onError: (message: string | null) => void;
  hasError: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

interface InputStyleProps {
  hasError: boolean;
}

export default function NumberInput({
  onChange,
  onError,
  hasError,
  ref,
  ...props
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tmpValue = e.target.value;
    if (
      Number.isNaN(Number(tmpValue)) ||
      (tmpValue !== "" && tmpValue.includes(" "))
    ) {
      onError("숫자만 입력할 수 있습니다.");
      return;
    }

    onChange(tmpValue);
    onError(null);
  };

  return (
    <StyledInput
      hasError={hasError}
      type="text"
      inputMode="numeric"
      onChange={(e) => handleInputChange(e)}
      {...(ref ? { ref } : {})}
      {...props}
    />
  );
}

const StyledInput = styled.input<InputStyleProps>`
  border: 1px solid ${(props) => (props.hasError ? "#FF3D3D" : "#acacac")};
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

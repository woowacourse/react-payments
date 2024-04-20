/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import { inputStyle, sizeStyles } from "./FormInput.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<InputProps> = ({
  sizePreset = "medium",
  onChange,
  ...props
}) => {
  return (
    <input
      {...props}
      css={[inputStyle, sizeStyles[sizePreset]]}
      onChange={(e) => onChange(e)}
    />
  );
};

export default FormInput;

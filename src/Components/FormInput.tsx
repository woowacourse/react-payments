/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SIZE: Record<NonNullable<InputProps["sizePreset"]>, "20%" | "45%" | "100%"> = {
  small: "20%",
  medium: "45%",
  large: "100%",
};

const FormInput: React.FC<InputProps> = ({ sizePreset = "medium", onChange, ...props }) => {
  const inputStyle = css({
    height: "32px",
    borderRadius: "2px",
    border: "solid 1px #ACACAC",
    padding: "8px",
    width: SIZE[sizePreset],
    marginTop: "10px",
    textTransform: "uppercase",
  });
  return <input {...props} css={inputStyle} onChange={(e) => onChange(e)} />;
};

export default FormInput;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
}

const SIZE: Record<NonNullable<InputProps["sizePreset"]>, 18 | 38 | 78> = {
  small: 18,
  medium: 38,
  large: 78,
};

const FormInput: React.FC<InputProps> = ({ sizePreset = "medium", ...props }) => {
  return <input {...props} size={SIZE[sizePreset]} />;
};

export default FormInput;

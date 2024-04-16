interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizeString?: "small" | "medium" | "large";
}

const SIZE: Record<NonNullable<InputProps["sizeString"]>, 18 | 38 | 78> = {
  small: 18,
  medium: 38,
  large: 78,
};

const FormInput: React.FC<InputProps> = ({ sizeString = "medium", ...props }) => {
  return <input {...props} size={SIZE[sizeString]} />;
};

export default FormInput;

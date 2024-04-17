import { CSSProperties } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // checkError?: React.ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
}

export default function Input(props: InputProps) {
  const { onChange, ...rest } = props;

  const inputStyle: CSSProperties = {
    border: `4px solid ${props.isError ? "red" : "grey"}`,
  };

  return <input {...rest} onChange={onChange} style={inputStyle} />;
}

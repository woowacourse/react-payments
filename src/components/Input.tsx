interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // checkError?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  const { onChange, ...rest } = props;

  return <input {...rest} onChange={onChange} />;
}

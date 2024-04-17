interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checkError?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  const { checkError, ...rest } = props;

  // function onChange(e) {
  //   checkError(e);
  //   // const errorMessage = checkError();
  // }
  return <input {...rest} onChange={checkError} />;
}

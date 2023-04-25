interface InputLabelProps {
  text: string;
}

export function InputLabel(props: InputLabelProps) {
  const { text } = props;

  return <h2>{text}</h2>;
}

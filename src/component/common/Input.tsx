import { ChangeEvent } from "react";

interface Props {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
  const { type, onChange, value } = props;
  return <input type={type} onChange={onChange} value={value} />;
}

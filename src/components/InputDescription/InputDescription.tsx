interface Props {
  inputValue: string;
}

export default function InputDescription({ inputValue }: Props) {
  return (
    <div className="input-description">
      <p>{inputValue}</p>
    </div>
  );
}

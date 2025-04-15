interface Props {
  inputValue: string;
}

export default function InputSubtitle({ inputValue }: Props) {
  return (
    <div className="input-subtitle">
      <p>{inputValue}</p>
    </div>
  );
}

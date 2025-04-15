interface Props {
  inputValue: string;
}

export default function InputTitle({ inputValue }: Props) {
  return (
    <div className="input-title">
      <h2>{inputValue} 입력해 주세요.</h2>
    </div>
  );
}

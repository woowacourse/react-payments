import "./InputTitle.css";
interface Props {
  inputValue: string;
}

const CONSTANT_INPUT_TITLE = " 입력해 주세요.";

export default function InputTitle({ inputValue }: Props) {
  return (
    <div className="input-title">
      <h2>
        {inputValue}
        {CONSTANT_INPUT_TITLE}
      </h2>
    </div>
  );
}

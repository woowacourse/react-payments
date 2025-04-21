import styles from "./InputText.module.css";

interface Props {
  inputValue: string;
  variant: "title" | "subtitle" | "description";
  useSuffix?: boolean;
}

const CONSTANT_INPUT_TITLE = " 입력해 주세요.";

export default function InputText({ inputValue, variant, useSuffix }: Props) {
  const className = styles[`input-${variant}`];

  if (variant === "title") {
    return (
      <div className={className}>
        <h2>
          {inputValue}
          {useSuffix !== false && CONSTANT_INPUT_TITLE}
        </h2>
      </div>
    );
  }

  return (
    <div className={className}>
      <p>{inputValue}</p>
    </div>
  );
}

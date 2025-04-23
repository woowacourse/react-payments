import styles from "./CardNumberInput.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  type: "text" | "password";
};

// type은 필수로 받기(이게 옵셔널일 이유를 모르겠음)
// input 태그의 기본 속성을 상속 받기(ComponentProps 타입 알아보기)
// forwardRef 제거 하기(React 19 버전에는 안써도 됨)
// 컴포넌트 이름 변경하기(card라는 도메인이 들어가야 할 이유를 모르겠음)
// 코드에서 너무 GPT 냄새남 (탈취제 필요)

export default function CardNumberInput({
  value,
  onChange,
  placeholder = "1234",
  errorMessage = "",
  type = "text",
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className={`${styles["input-number"]} ${
        errorMessage ? styles["error"] : ""
      }`}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
    />
  );
}

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // checkError?: React.ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
  onBlur?: (e: any) => void;
}

export default function Input(props: InputProps) {
  const { onChange, ...rest } = props;

  return (
    <input
      className={`${styles.customInput} ${props.isError ? styles.isError : ""} `}
      {...rest}
      onBlur={(e) => {
        if (props.onBlur) {
          props.onBlur(e);
        } // 넘겨준 블러 함수 사용
      }}
      onChange={onChange}
    />
  );
}

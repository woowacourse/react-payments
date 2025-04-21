import {
  ComponentProps,
  Dispatch,
  forwardRef,
  SetStateAction,
  useState,
  Ref,
} from "react";
import styles from "./Input.module.css";

export interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<boolean>>
  ) => void;
}

function Input(
  { type, onChange, name, id, placeholder, maxLength }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const [isValid, setIsValid] = useState<boolean>(true);

  return (
    <input
      ref={ref}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={(e) => onChange(e, setIsValid)}
      className={`${styles.input} ${!isValid && styles.isNotValid} tx-md`}
    />
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);

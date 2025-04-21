import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import styles from "./Input.module.css";

export interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<boolean>>
  ) => void;
}

function Input({ onChange, ...props }: InputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  return (
    <input
      {...props}
      onChange={(e) => onChange(e, setIsValid)}
      className={`${styles.input} ${!isValid && styles.isNotValid} tx-md`}
    />
  );
}

export default Input;

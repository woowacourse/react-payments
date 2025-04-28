import styles from "./CardNumberInput.module.css";
import type { ChangeEvent, ComponentProps } from "react";

type Props = {
  errorMessage?: string;
} & Omit<ComponentProps<"input">, "onChange"> & {
    onChange: (value: string) => void;
  };

export default function NumberInput({
  value,
  onChange,
  placeholder = "1234",
  errorMessage = "",
  type = "text",
  ref,
}: Props) {
  const handleNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumberValue = /^\d*$/.test(e.target.value);

    if (isNumberValue) {
      onChange?.(e.target.value);
    }
  };

  return (
    <input
      ref={ref}
      className={`${styles["input-number"]} ${
        errorMessage ? styles["error"] : ""
      }`}
      placeholder={placeholder}
      value={value} // state
      onChange={handleNumberInputChange} // setter
      type={type}
    />
  );
}

import styles from "./CardNumberInput.module.css";
import { forwardRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
};

const CardNumberInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, placeholder = "1234", errorMessage = "" }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) {
        onChange(newValue);
      }
    };

    return (
      <input
        ref={ref}
        className={`${styles["input-number"]} ${
          errorMessage ? styles["error"] : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    );
  }
);

CardNumberInput.displayName = "CardNumberInput";
export default CardNumberInput;

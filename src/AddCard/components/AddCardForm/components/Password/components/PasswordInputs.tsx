import styles from "./PasswordInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { PASSWORD_INPUT_LENGTH } from "../constants";
import { Ref } from "react";

export interface PasswordInputsProps {
  passwordState: { value: string; errorMessage: string };
  handlePasswordChange: (value: string) => void;
  ref: Ref<HTMLInputElement>;
}

const PasswordInputs = ({
  passwordState,
  handlePasswordChange,
  ref,
}: PasswordInputsProps) => {
  return (
    <div className={styles.container}>
      <Label htmlFor="password-input">비밀번호 앞 2자리</Label>
      <p className={styles.passwordInputs}>
        <Input
          ref={ref}
          id="password-input"
          type="password"
          maxLength={PASSWORD_INPUT_LENGTH}
          placeholder="**"
          isError={Boolean(passwordState.errorMessage)}
          value={passwordState.value}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
      </p>
      {passwordState.errorMessage && (
        <p id="error-message" className={styles.errorMessage}>
          {passwordState.errorMessage}
        </p>
      )}
    </div>
  );
};

export default PasswordInputs;

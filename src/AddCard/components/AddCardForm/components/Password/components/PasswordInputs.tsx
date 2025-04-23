import styles from "./PasswordInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { PASSWORD_INPUT_LENGTH } from "../constants";

export interface PasswordInputProps {
  passwordState: { value: string; errorMessage: string };
  handlePasswordChange: (value: string) => void;
}

function PasswordInputs({
  passwordState,
  handlePasswordChange,
}: PasswordInputProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="cvc-input">비밀번호 앞 2자리</Label>
      <p className={styles.passwordInputs}>
        <Input
          id="password-input"
          type="text"
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
}

export default PasswordInputs;

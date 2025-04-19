import styles from "./CVCInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";

export interface CVCInputsProps {
  CVCState: { value: string; isError: boolean };
  handleCVCChange: (value: string) => void;
}

function CVCInputs({ CVCState, handleCVCChange }: CVCInputsProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="cvc-input">CVC</Label>
      <p className={styles.cvcInputs}>
        <Input
          id="cvc-input"
          role="cvc-input"
          type="text"
          inputMode="numeric"
          maxLength={3}
          pattern="[0-9]*"
          required
          placeholder="123"
          isError={CVCState.isError}
          value={CVCState.value}
          onChange={(e) => handleCVCChange(e.target.value)}
        />
      </p>
      {CVCState.isError && (
        <p id="error-message" className={styles.errorMessage}>
          3자리의 숫자만 입력 가능합니다.
        </p>
      )}
    </div>
  );
}

export default CVCInputs;

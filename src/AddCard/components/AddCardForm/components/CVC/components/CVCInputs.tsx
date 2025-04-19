import styles from "./CVCInputs.module.css";
import Input from "@components/Input/Input";
import Label from "@components/Label/Label";
import { CVC_INPUT_LENGTH } from "../constants";

export interface CVCInputsProps {
  CVCState: { value: string; errorMessage: string };
  handleCVCChange: (value: string) => void;
}

function CVCInputs({ CVCState, handleCVCChange }: CVCInputsProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="cvc-input">CVC</Label>
      <p className={styles.cvcInputs}>
        <Input
          id="cvc-input"
          type="text"
          maxLength={CVC_INPUT_LENGTH}
          placeholder="123"
          isError={Boolean(CVCState.errorMessage)}
          value={CVCState.value}
          onChange={(e) => handleCVCChange(e.target.value)}
        />
      </p>
      {CVCState.errorMessage && (
        <p id="error-message" className={styles.errorMessage}>
          {CVCState.errorMessage}
        </p>
      )}
    </div>
  );
}

export default CVCInputs;

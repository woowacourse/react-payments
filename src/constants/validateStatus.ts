export type ValidateStatus = "error" | "valid" | "notValid";

const VALIDATE_STATUS: Record<ValidateStatus, ValidateStatus> = {
  error: "error",
  valid: "valid",
  notValid: "notValid",
};

export default VALIDATE_STATUS;

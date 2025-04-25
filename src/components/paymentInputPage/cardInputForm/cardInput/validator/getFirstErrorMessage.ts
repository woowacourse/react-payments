import ERROR_MESSAGE from "../constants/ErrorMessage";

export function getExpirationFirstErrorMessage(
  errorResult: Record<string, boolean>,
  fieldKey: "MONTH" | "YEAR"
): string {
  const firstError = Object.entries(errorResult).find(
    ([, isValid]) => !isValid
  );
  if (!firstError) return "";

  const [errorCode] = firstError;
  return (
    (ERROR_MESSAGE.EXPIRATION[fieldKey] as Record<string, string>)[errorCode] ??
    ""
  );
}

export function getFirstErrorMessage(
  errorResult: Record<string, boolean>,
  fieldKey: "CVC" | "NUMBER" | "PASSWORD"
): string {
  const firstError = Object.entries(errorResult).find(
    ([, isValid]) => !isValid
  );
  if (!firstError) return "";

  const [errorCode] = firstError;
  return (ERROR_MESSAGE[fieldKey] as Record<string, string>)[errorCode] ?? "";
}

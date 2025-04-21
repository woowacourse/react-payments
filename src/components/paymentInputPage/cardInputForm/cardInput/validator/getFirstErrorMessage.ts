export function getFirstErrorMessage(
  errorResult: Record<string, boolean>,
  fieldKey: "MONTH" | "YEAR"
): string | null {
  const firstError = Object.entries(errorResult).find(
    ([, isValid]) => !isValid
  );
  if (!firstError) return null;

  const [errorCode] = firstError;
  return (
    ERROR_MESSAGE.EXPIRATION[fieldKey][errorCode as ExpirationErrorKey] ?? null
  );
}

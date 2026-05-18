export function extractErrorCodes(
  errors: Record<string, { code: string } | null | undefined>,
) {
  return Object.values(errors)
    .filter(Boolean)
    .map((err) => err!.code);
}

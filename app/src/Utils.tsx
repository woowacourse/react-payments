export function sanitizeErrors(messages: string[]) {
  return [...new Set(messages.filter((item: string) => item !== ""))];
}

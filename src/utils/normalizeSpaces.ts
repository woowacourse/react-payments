export default function normalizeSpaces(str: string): string {
  return str.replace(/\s+/g, " ").trimStart();
}

import { EXPIRATION_FIELDS } from "../types/cardKeyTypes";

export function indexToExpirationKey(index: number) {
  return EXPIRATION_FIELDS[index];
}

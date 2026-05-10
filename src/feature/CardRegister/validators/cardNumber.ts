import { CARD_NUMBER_CHUNK_LENGTH } from "../constants";

export const isCardNumberChunkLengthExceeded = (value: string) =>
  value.length > CARD_NUMBER_CHUNK_LENGTH;

export const isCardNumberChunkLengthValid = (value: string) =>
  value.length === CARD_NUMBER_CHUNK_LENGTH;

export const isLastCardNumberChunkLengthExceeded = (
  value: string,
  length: number,
) => value.length > length;

export const isLastCardNumberChunkLengthValid = (
  value: string,
  length: number,
) => value.length === length;

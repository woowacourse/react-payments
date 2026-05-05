import { CARD_NUMBER_CHUNK_LENGTH } from "../constants";

export const validateExceedCardNumberChunkLength = (value: string) =>
  value.length > CARD_NUMBER_CHUNK_LENGTH;

export const validateCardNumberChunkLength = (value: string) =>
  value.length === CARD_NUMBER_CHUNK_LENGTH;

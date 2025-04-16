import { INITIAL_EXPIRE_DATE_STATE } from "../constants";

export type ExpireDateInputKey = keyof typeof INITIAL_EXPIRE_DATE_STATE;
export type ExpireDateState = Record<
  ExpireDateInputKey,
  { value: string; errorMessage: string }
>;

export type ExpireDateInputKey = "MM" | "YY";

export type ExpireDateState = Record<
  ExpireDateInputKey,
  { value: string; errorMessage: string }
>;

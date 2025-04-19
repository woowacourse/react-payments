export type CardNumberInputKey = "first" | "second" | "third" | "fourth";
export type CardNumberState = Record<
  CardNumberInputKey,
  { value: string; errorMessage: string }
>;

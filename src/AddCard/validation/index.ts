import type { Slices } from "../types/hook";

export const validators = [
  ({ card }: Slices) =>
    Object.values(card.cardNumberState).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 4
    ),

  ({ brand }: Slices) => {
    return brand.selectedBrand != null;
  },

  ({ expire }: Slices) =>
    Object.values(expire.expireDate).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 2
    ),

  ({ cvc }: Slices) =>
    !cvc.CVCState.errorMessage && cvc.CVCState.value.length === 3,

  ({ password }: Slices) =>
    !password.passwordState.errorMessage &&
    password.passwordState.value.length === 2,
];

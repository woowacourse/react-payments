import type { Slices } from "../types/hook";

const useFormState = (slices: Slices) => {
  const { card, brand, expire, cvc, password } = slices;

  return {
    state: { ...card, ...brand, ...expire, ...cvc, ...password },
    previewState: {
      cardNumberState: card.cardNumberState,
      selectedBrand: brand.selectedBrand,
      expireDate: expire.expireDate,
    },
  };
};
export default useFormState;

import type { Brand } from "../components/AddCardForm/components/CardBrand/types";

export interface AddCardCompleteLocationState {
  firstCardNumber: string;
  selectedBrand: Brand | null;
}

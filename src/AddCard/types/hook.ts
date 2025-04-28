import type useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import type useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import type useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import type useControlledSelectedCardBrand from "../components/AddCardForm/components/CardBrand/hooks/useControlledSelectCardBrand";
import type useControlledPassword from "../components/AddCardForm/components/Password/hooks/useControlledPassword";

export type FlowStep =
  | "CARD_NUMBER"
  | "CARD_BRAND"
  | "EXPIRE_DATE"
  | "CVC"
  | "PASSWORD"
  | "COMPLETE";

export type Slices = {
  card: ReturnType<typeof useControlledCardNumber>;
  brand: ReturnType<typeof useControlledSelectedCardBrand>;
  expire: ReturnType<typeof useControlledExpireDate>;
  cvc: ReturnType<typeof useControlledCVC>;
  password: ReturnType<typeof useControlledPassword>;
};

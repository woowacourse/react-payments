export type OverseaCardBrand = "VISA" | "MASTERCARD" | "DEFAULT";

type OverseaCardBrandImageSrc = string;

export type OverseaCardBrandImages = Record<
  OverseaCardBrand,
  OverseaCardBrandImageSrc
>;

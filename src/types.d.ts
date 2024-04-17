interface CardInfo {
  cardNumbers: string[];
  cardValidityPeriod: string[];
  ownerName?: string[];
}

type SizePresetType = "small" | "medium" | "large";

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputPlaceholderList: (string | null)[];
  valueList: Values<CardInfo>;
}

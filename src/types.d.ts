type Period = {
  month?: number;
  year?: number;
};

interface CardInfo {
  cardNumbers: number[];
  cardValidityPeriod: Period;
  ownerName?: string;
}

type SizePresetType = "small" | "medium" | "large";

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputPlaceholderList: (string | null)[];
  initialValue: Values<CardInfo>;
}

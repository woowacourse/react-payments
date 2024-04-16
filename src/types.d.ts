type Period = {
  month: number;
  year: number;
};

interface CardInfo {
  cardNumbers: number[];
  cardValidityPeriod: Partial<Period>;
  ownerName: string;
}

type SizePresetType = "small" | "medium" | "large";

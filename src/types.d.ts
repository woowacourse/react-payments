type Period = {
  month: number;
  year: number;
};

interface CardInfo {
  cardNumbers: number[];
  cardValidityPeriod: Period;
  ownerName: string;
}

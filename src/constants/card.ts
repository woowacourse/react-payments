export const CARD_TYPE = {
  visaStart: 4,
  masterCardStart: 51,
  masterCardEnd: 55,
} as const;

interface ICardCompany {
  readonly [key: string]: { readonly color: string };
}

export const CARD_COMPANY: ICardCompany = {
  BC카드: {
    color: "#F04651",
  },
  신한카드: {
    color: "#0046FF",
  },
  카카오뱅크: {
    color: "#FFE600",
  },
  현대카드: {
    color: "#000000",
  },
  우리카드: {
    color: "#007BC8",
  },
  롯데카드: {
    color: "#ED1C24",
  },
  하나카드: {
    color: "#009490",
  },
  국민카드: {
    color: "#6A6056",
  },
} as const;

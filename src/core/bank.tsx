import {
  BCIc,
  HanaIc,
  HyundaiIc,
  KakaoIc,
  KbIc,
  LotteIc,
  ShinhanIc,
  WorriIc,
} from "../assets";

export const bank: BankItem[] = [
  {
    id: 0,
    logo: () => <BCIc width="3.8rem" height="3.8rem" />,
    logoName: "BC카드",
  },
  {
    id: 1,
    logo: () => <HanaIc width="3.8rem" height="3.8rem" />,
    logoName: "하나카드",
  },
  {
    id: 2,
    logo: () => <HyundaiIc width="3.8rem" height="3.8rem" />,
    logoName: "현대카드",
  },
  {
    id: 3,
    logo: () => <KakaoIc width="3.8rem" height="3.8rem" />,
    logoName: "카카오뱅크",
  },
  {
    id: 4,
    logo: () => <KbIc width="3.8rem" height="3.8rem" />,
    logoName: "국민카드",
  },
  {
    id: 5,
    logo: () => <LotteIc width="3.8rem" height="3.8rem" />,
    logoName: "롯데카드",
  },
  {
    id: 5,
    logo: () => <ShinhanIc width="3.8rem" height="3.8rem" />,
    logoName: "신한카드",
  },
  {
    id: 7,
    logo: () => <WorriIc width="3.8rem" height="3.8rem" />,
    logoName: "우리카드",
  },
];

interface BankItem {
  id: number;
  logo: () => JSX.Element;
  logoName: string;
}

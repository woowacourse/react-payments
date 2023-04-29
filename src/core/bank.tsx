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
    logo: () => <BCIc />,
    logoName: "BC카드",
  },
  {
    id: 1,
    logo: () => <HanaIc />,
    logoName: "하나카드",
  },
  {
    id: 2,
    logo: () => <HyundaiIc />,
    logoName: "현대카드",
  },
  {
    id: 3,
    logo: () => <KakaoIc />,
    logoName: "카카오뱅크",
  },
  {
    id: 4,
    logo: () => <KbIc />,
    logoName: "국민카드",
  },
  {
    id: 5,
    logo: () => <LotteIc />,
    logoName: "롯데카드",
  },
  {
    id: 5,
    logo: () => <ShinhanIc />,
    logoName: "신한카드",
  },
  {
    id: 7,
    logo: () => <WorriIc />,
    logoName: "우리카드",
  },
];

interface BankItem {
  id: number;
  logo: () => JSX.Element;
  logoName: string;
}

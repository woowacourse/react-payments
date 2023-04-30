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
    color: "#F04651",
    font: "#ffffff",
  },
  {
    id: 1,
    logo: () => <HanaIc width="3.8rem" height="3.8rem" />,
    logoName: "하나카드",
    color: "#009490",
    font: "#ffffff",
  },
  {
    id: 2,
    logo: () => <HyundaiIc width="3.8rem" height="3.8rem" />,
    logoName: "현대카드",
    color: "#000000",
    font: "#ffffff",
  },
  {
    id: 3,
    logo: () => <KakaoIc width="3.8rem" height="3.8rem" />,
    logoName: "카카오뱅크",
    color: "#FFE600",
    font: "#000000",
  },
  {
    id: 4,
    logo: () => <KbIc width="3.8rem" height="3.8rem" />,
    logoName: "국민카드",
    color: "#554E45",
    font: "#FFCA0C",
  },
  {
    id: 5,
    logo: () => <LotteIc width="3.8rem" height="3.8rem" />,
    logoName: "롯데카드",
    color: "#ED1C24",
    font: "#ffffff",
  },
  {
    id: 6,
    logo: () => <ShinhanIc width="3.8rem" height="3.8rem" />,
    logoName: "신한카드",
    color: "#0046FF",
    font: "#ffffff",
  },
  {
    id: 7,
    logo: () => <WorriIc width="3.8rem" height="3.8rem" />,
    logoName: "우리카드",
    color: "#0093D8",
    font: "#ffffff",
  },
];

interface BankItem {
  id: number;
  logo: () => JSX.Element;
  logoName: string;
  color: string;
  font: string;
}

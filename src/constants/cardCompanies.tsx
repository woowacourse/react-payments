import {
  BcCard,
  ShinhanCard,
  KakaoCard,
  HyundaiCard,
  WooriCard,
  LotteCard,
  HanaCard,
  KbCard,
} from "../components/svg";
import { CardCompanyLogoProps } from "types";

export const UNSELECTED_CARD_COMPANY: Readonly<string> = "카드사 선택";

export const CARD_COMPANIES: Readonly<{
  [key: string]: (props: CardCompanyLogoProps) => JSX.Element;
}> = {
  BC카드: (props) => <BcCard {...props} />,
  신한카드: (props) => <ShinhanCard {...props} />,
  카카오뱅크: (props) => <KakaoCard {...props} />,
  현대카드: (props) => <HyundaiCard {...props} />,
  우리카드: (props) => <WooriCard {...props} />,
  롯데카드: (props) => <LotteCard {...props} />,
  하나카드: (props) => <HanaCard {...props} />,
  국민카드: (props) => <KbCard {...props} />,
};

export const CARD_COLORS: Readonly<{ [key: string]: string }> = {
  BC카드: "#F04652",
  신한카드: "#0046FF",
  카카오뱅크: " #FFEF38",
  현대카드: "#333",
  우리카드: "#027BC8",
  롯데카드: "#ED1C23",
  하나카드: "#009490",
  국민카드: "#6F655B",
};

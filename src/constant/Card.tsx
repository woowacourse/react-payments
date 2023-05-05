import { ReactComponent as BCLogo } from "../assets/bccard-logo.svg";
import { ReactComponent as HanaLogo } from "../assets/hanacard-logo.svg";
import { ReactComponent as HyundaiLogo } from "../assets/hyundaicard-logo.svg";
import { ReactComponent as KakaoBankLogo } from "../assets/kakaobank-logo.svg";
import { ReactComponent as KBLogo } from "../assets/kbcard-logo.svg";
import { ReactComponent as LotteLogo } from "../assets/lottecard-logo.svg";
import { ReactComponent as ShinhanLogo } from "../assets/shinhancard-logo.svg";
import { ReactComponent as WooriLogo } from "../assets/wooricard-logo.svg";

export const cardMap = new Map([
  [
    "비씨카드",
    {
      component: <BCLogo width={"37px"} height={"37px"} />,
      color: "#C03841",
    },
  ],
  [
    "하나카드",
    {
      component: <HanaLogo width={"37px"} height={"37px"} />,
      color: "#009490",
    },
  ],
  [
    "현대카드",
    {
      component: <HyundaiLogo width={"37px"} height={"37px"} />,
      color: "#000000",
    },
  ],
  [
    "카카오뱅크",
    {
      component: <KakaoBankLogo width={"37px"} height={"37px"} />,
      color: "#FFE600",
    },
  ],
  [
    "국민카드",
    {
      component: <KBLogo width={"37px"} height={"37px"} />,
      color: "#685E54",
    },
  ],
  [
    "롯데카드",
    {
      component: <LotteLogo width={"37px"} height={"37px"} />,
      color: "#ED1C24",
    },
  ],
  [
    "신한카드",
    {
      component: <ShinhanLogo width={"37px"} height={"37px"} />,
      color: "#0046FF",
    },
  ],
  [
    "우리카드",
    {
      component: <WooriLogo width={"37px"} height={"37px"} />,
      color: "#007BC8",
    },
  ],
]);

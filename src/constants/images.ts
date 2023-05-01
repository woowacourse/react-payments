import type { Issuer } from "../types";
import BCCardLogo from "../assets/bc-logo.svg";
import ShinhanCardLogo from "../assets/shinhan-logo.svg";
import KakaoBankLogo from "../assets/kakaobank-logo.svg";
import HyundaiCardLogo from "../assets/hyundaicard-logo.svg";
import WooriCardLogo from "../assets/wooricard-logo.svg";
import LotteCardLogo from "../assets/lottecard-logo.svg";
import HanaCardLogo from "../assets/hanacard-logo.svg";
import KBCardLogo from "../assets/kbcard-logo.svg";

const CARD_ISSUER_LOGO_IMAGE: Record<Issuer, string> = {
  BC카드: BCCardLogo,
  신한카드: ShinhanCardLogo,
  카카오뱅크: KakaoBankLogo,
  현대카드: HyundaiCardLogo,
  우리카드: WooriCardLogo,
  롯데카드: LotteCardLogo,
  하나카드: HanaCardLogo,
  국민카드: KBCardLogo,
};

export { CARD_ISSUER_LOGO_IMAGE };

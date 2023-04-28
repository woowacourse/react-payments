import { ReactComponent as WooriCard } from "../asset/WooriCard.svg";
import { ReactComponent as LotteCard } from "../asset/LotteCard.svg";
import { ReactComponent as HanaCard } from "../asset/HanaCard.svg";
import { ReactComponent as KbCard } from "../asset/KbCard.svg";
import { ReactComponent as BcCard } from "../asset/BcCard.svg";
import { ReactComponent as KakaoCard } from "../asset/KakaoCard.svg";
import { ReactComponent as ShinhanCard } from "../asset/ShinhanCard.svg";
import { ReactComponent as HyundaiCard } from "../asset/HyundaiCard.svg";
import { CardCo } from "../type";

const CardCoIcon = {
  woori: WooriCard,
  lotte: LotteCard,
  hana: HanaCard,
  kb: KbCard,
  kakao: KakaoCard,
  bc: BcCard,
  shinhan: ShinhanCard,
  hyundai: HyundaiCard,
};

export const GetCardCoIcon = (cardCo: CardCo) => {
  const Icon = CardCoIcon[cardCo];
  return <Icon />;
};

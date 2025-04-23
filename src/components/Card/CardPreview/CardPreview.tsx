import { CARD_COMPANY } from "../../../constants/constants";
import { useCard } from "../../../hooks/useCard";
import { useCardType } from "../../../hooks/useCardType";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  CardPreviewContainerCSS,
  CardPreviewCSS,
  CardTopContainerCSS,
  CardICChipCSS,
} from "./CardPreview.styled";

// TODO: constants 로 분리?
const cardCompanyColorMap = {
  [CARD_COMPANY.none]: "#333333",
  [CARD_COMPANY.bc]: "#F04651",
  [CARD_COMPANY.shinhan]: "#0046FF",
  [CARD_COMPANY.kakaobank]: "#FFE600",
  [CARD_COMPANY.hyundai]: "#000000",
  [CARD_COMPANY.woori]: "#007BC8",
  [CARD_COMPANY.lotte]: "#ED1C24",
  [CARD_COMPANY.hana]: "#009490",
  [CARD_COMPANY.kb]: "#6A6056",
};

export default function CardPreview() {
  const { cardNumbers, expirationPeriod, cardCompany } = useCard();
  const cardType = useCardType(cardNumbers);

  return (
    <CardPreviewContainerCSS>
      <CardPreviewCSS $cardCompanyColor={cardCompanyColorMap[cardCompany]}>
        <CardTopContainerCSS>
          <CardICChipCSS />
          {cardType !== null && <CardTypeCSS $cardType={cardType} />}
        </CardTopContainerCSS>

        <CardNumbersGroupCSS>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>
            {cardNumbers.third && "*".repeat(cardNumbers.third.length)}
          </span>
          <span>
            {cardNumbers.fourth && "*".repeat(cardNumbers.fourth.length)}
          </span>
        </CardNumbersGroupCSS>

        {(expirationPeriod.month || expirationPeriod.year) && (
          <span>
            {expirationPeriod.month}/{expirationPeriod.year}
          </span>
        )}
      </CardPreviewCSS>
    </CardPreviewContainerCSS>
  );
}

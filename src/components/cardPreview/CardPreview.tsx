import PreviewCardNumber from "./cardNumber/PreviewCardNumber";
import PreviewCardExpireDate from "./expireDate/PreviewCardExpireDate";
import { getCardBrandLogoSrc } from "./utils";
import {
  CardImageWrapper,
  Card,
  Upper,
  IC,
  PayMethodImage,
  CardImageInfoWrapper,
} from "./CardPreview.styles";

export default function CardPreview({
  cardNumber,
  expireDate,
}: {
  cardNumber: string[];
  expireDate: string[];
}) {
  const cardBrandLogoSrc = getCardBrandLogoSrc(cardNumber[0]);

  return (
    <CardImageWrapper>
      <Card>
        <Upper>
          <IC />
          {cardBrandLogoSrc && (
            <PayMethodImage src={cardBrandLogoSrc} alt="payment method" />
          )}
        </Upper>

        <CardImageInfoWrapper>
          <PreviewCardNumber cardNumber={cardNumber} />
          <PreviewCardExpireDate expireDate={expireDate} />
        </CardImageInfoWrapper>
      </Card>
    </CardImageWrapper>
  );
}

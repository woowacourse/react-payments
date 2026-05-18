import PreviewCardNumber from "./cardNumber/PreviewCardNumber";
import PreviewCardExpireDate from "./expireDate/PreviewCardExpireDate";
import { getCardBrandLogoSrc } from "./utils";
import {
  Wrapper,
  Card,
  Upper,
  IC,
  PayMethodImage,
  InfoWrapper,
} from "./CardPreview.styles";
import { useCardForm } from "../useCardForm";
import { CARD_BRANDS } from "../../constants/constants";

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}

export default function CardPreview({ cardForm }: Props) {
  const cardNumber = cardForm.cardNumber.value;
  const expireDate = cardForm.expireDate.value;
  const cardBrand = cardForm.cardBrand.value;
  const cardBrandLogoSrc = getCardBrandLogoSrc(cardNumber.join(''));
  const backgroundColor = cardBrand ? CARD_BRANDS[cardBrand].color : undefined;

  return (
    <Wrapper>
      <Card backgroundColor={backgroundColor}>
        <Upper>
          <IC />
          {cardBrandLogoSrc && (
            <PayMethodImage src={cardBrandLogoSrc} alt="payment method" />
          )}
        </Upper>

        <InfoWrapper>
          <PreviewCardNumber cardNumber={cardNumber} />
          <PreviewCardExpireDate expireDate={expireDate} />
        </InfoWrapper>
      </Card>
    </Wrapper>
  );
}

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

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}

export default function CardPreview({ cardForm }: Props) {
  const cardNumber = cardForm.cardNumber.value;
  const expireDate = cardForm.expireDate.value;
  const cardBrandLogoSrc = getCardBrandLogoSrc(cardNumber[0]);

  return (
    <Wrapper>
      <Card>
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

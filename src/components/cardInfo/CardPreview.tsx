import styled from "@emotion/styled";
import PreviewCardNumber from "./PreviewCardNumber";
import PreviewCardExpireDate from "./PreviewCardExpireDate";

export default function CardPreview({
  cardNumber,
  expireDate,
}: {
  cardNumber: string[];
  expireDate: string[];
}) {
  const cardSrc = getCardSrc(cardNumber[0]);

  return (
    <CardImageWrapper>
      <Card>
        <Upper>
          <IC />
          {cardSrc && <PayMethodImage src={cardSrc} alt="payment method" />}
        </Upper>

        <CardImageInfoWrapper>
          <PreviewCardNumber cardNumber={cardNumber} />
          <PreviewCardExpireDate expireDate={expireDate} />
        </CardImageInfoWrapper>
      </Card>
    </CardImageWrapper>
  );
}

function getCardSrc(firstGroup: string): string {
  if (firstGroup.startsWith("4")) return "./src/assets/Visa.svg";

  const num = Number(firstGroup.slice(0, 2));
  if (num >= 51 && num <= 55) return "./src/assets/Mastercard.svg";

  return "";
}

const CardImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 77px;
`;

const Card = styled.div`
  background-color: rgba(51, 51, 51, 1);
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 212px;
  height: 132px;
  padding: 8px 12px;
`;

const Upper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IC = styled.div`
  background-color: rgba(221, 205, 120, 1);
  border: 0.5px solid rgba(221, 205, 120, 0.1);
  border-radius: 1.5px;
  width: 26px;
  height: 22px;
`;

const PayMethodImage = styled.img`
  width: 36px;
  height: 22px;
`;

const CardImageInfoWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

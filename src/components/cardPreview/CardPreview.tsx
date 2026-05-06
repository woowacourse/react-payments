import styled from "@emotion/styled";
import { type CardPreviewProps } from "../../types/types";
import CardPreviewInfo from "./CardPreviewInfo";
import { selectCardType } from "../../utils/selectCardType";

export default function CardPreview({
  cardNumber,
  expireDate,
}: CardPreviewProps) {
  const cardType = selectCardType(cardNumber);

  return (
    <CardPreviewWrapper>
      <Card>
        <Upper>
          <IC />
          {cardType && <PayMethodImage src={cardType} alt="payment method" />}
        </Upper>

        <CardPreviewInfo cardNumber={cardNumber} expireDate={expireDate} />
      </Card>
    </CardPreviewWrapper>
  );
}

const CardPreviewWrapper = styled.section`
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

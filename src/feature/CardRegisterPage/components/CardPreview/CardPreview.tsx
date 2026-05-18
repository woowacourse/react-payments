import styled from "styled-components";
import type { CardCompanyType } from "../../../../common/types/CardCompany";
import type { CardInfoType } from "../../../../common/types/CardInfoType";
import { cardColors } from "../../../../styles/color";
import CardBrandLogo from "./CardBrandLogo/CardBrandLogo";
import CardExpiryDateDisplay from "./CardExpiryDateDisplay/CardExpiryDateDisplay";
import CardNumberDisplay from "./CardNumberDisplay/CardNumberDisplay";
import { getCardBrandName } from "../../utils/cardBrand";

const getCardColor = (cardCompany: CardCompanyType | null) => {
  if (!cardCompany) {
    return cardColors.default;
  }
  return cardColors[cardCompany];
};
const CardPreview = ({ cardInfo }: { cardInfo: CardInfoType }) => {
  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;

  return (
    <Container $cardCompany={selectedCardCompany}>
      <CardHeader>
        <IcChip />
        <CardBrandLogo brandName={getCardBrandName(cardNumbers)} />
      </CardHeader>
      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <CardExpiryDateDisplay
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
        />
      </CardBody>
    </Container>
  );
};

const Container = styled.div<{ $cardCompany: CardCompanyType | null }>`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 132px;
  padding: 8px 10px;
  gap: 12px;
  background-color: ${(props) => getCardColor(props.$cardCompany)};
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  height: 22px;

  width: 100%;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 6px;

  width: 100%;

  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const IcChip = styled.div`
  width: 36px;

  background-color: #ddcd78;
  border-radius: 4px;
`;

export default CardPreview;

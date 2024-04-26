import styled from "@emotion/styled";
import CreditCardBrandLogo from "./CreditCardBrandLogo";
import CreditCardInfo from "./CreditCardInfo";
import { CreditCardProps } from "../../../@types/CreditCard";
import CARD_COLOR from "../../../constants/cardColor";

const CreditCardFront = ({
  creditCardNumber,
  expirationPeriod,
  ownerName,
  selectedCard,
}: CreditCardProps) => {
  const cardFirstFourNumber = creditCardNumber[0];
  const cardColor = selectedCard ? CARD_COLOR[selectedCard] : "rgba(51, 51, 51, 1)";

  return (
    <CreditCardContainer cardColor={cardColor}>
      <CreditCardHeader>
        <YellowBox />
        <BrandLogoBox>
          <CreditCardBrandLogo creditCardNumber={cardFirstFourNumber} />
        </BrandLogoBox>
      </CreditCardHeader>
      <CreditCardInfo
        creditCardNumber={creditCardNumber}
        expirationPeriod={expirationPeriod}
        ownerName={ownerName}
      />
    </CreditCardContainer>
  );
};

export default CreditCardFront;

const CreditCardContainer = styled.div<{ cardColor: string }>`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${(props) => props.cardColor};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CreditCardHeader = styled.div`
  position: relative;
`;

const YellowBox = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 36px;
  height: 22px;
  border-radius: 2px;
  background: rgba(221, 205, 120, 1);
`;

const BrandLogoBox = styled.div`
  position: absolute;
  top: 8px;
  left: 164px;
  width: 36px;
  height: 22px;
  border: 0.5px;
`;

import styled from "@emotion/styled";
import CreditCardBrandLogo from "./CreditCardBrandLogo";

export type CardNumber = number | null;
type CreditCardNumber = [CardNumber, CardNumber, CardNumber, CardNumber];

interface CreditCardProps {
  creditCardNumber: CreditCardNumber;
}

const CreditCard = ({ creditCardNumber }: CreditCardProps) => {
  return (
    <CreditCardContainer>
      <CreditCardHeader>
        <YellowBox />
        <BrandLogoBox>{CreditCardBrandLogo(creditCardNumber[0])}</BrandLogoBox>
      </CreditCardHeader>
    </CreditCardContainer>
  );
};

export default CreditCard;

const CreditCardContainer = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: rgba(51, 51, 51, 1);
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

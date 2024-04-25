import styled from "@emotion/styled";
import { CreditCardProps } from "../../@types/CreditCard";
import CreditCardBrandLogo from "./CreditCardBrandLogo";
import CreditCardInfo from "./CreditCardInfo";

const CreditCard = ({
  creditCardNumber,
  expirationPeriod,
  ownerName,
  selectedCompany,
}: CreditCardProps & { selectedCompany: string }) => {
  return (
    <CreditCardContainer selectedCompany={selectedCompany}>
      <CreditCardHeader>
        <YellowBox />
        <BrandLogoBox>
          <CreditCardBrandLogo creditCardNumber={creditCardNumber[0]} />
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

export default CreditCard;

const CreditCardContainer = styled.div<{ selectedCompany: string }>`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  background: ${(props) => {
    switch (props.selectedCompany) {
      case "bcCard":
        return "rgba(240, 70, 81, 1)";
      case "shinhanCard":
        return "rgba(0, 70, 255, 1)";
      case "kakaoCard":
        return "rgba(255, 230, 0, 1)";
      case "hyundaiCard":
        return "rgba(0, 0, 0, 1)";
      case "wooriCard":
        return "rgba(0, 123, 200, 1)";
      case "lotteCard":
        return "rgba(237, 28, 36, 1)";
      case "hanaCard":
        return "rgba(0, 148, 144, 1)";
      case "kbCard":
        return "rgba(106, 96, 86, 1)";
      default:
        return "rgba(51, 51, 51, 1)";
    }
  }};
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

import visaImg from "../../../../../../public/images/Visa.png";
import masterCardImg from "../../../../../../public/images/Mastercard.png";
import dinersImg from "../../../../../../public/images/DinersClub.png";
import amexImg from "../../../../../../public/images/AmericanExpress.png";
import unionPayImg from "../../../../../../public/images/ChinaUnionPay.png";

import styled from "styled-components";
import type { CardBrandType } from "../../../../../common/types/CardBrand";

const BRAND_ICON = {
  visa: visaImg,
  masterCard: masterCardImg,
  diners: dinersImg,
  amex: amexImg,
  unionPay: unionPayImg,
};

const CardBrandLogo = ({ brandName }: { brandName: CardBrandType }) => {
  if (brandName === null) return null;
  const brandIcon = BRAND_ICON[brandName];

  return <BrandLogoImg src={brandIcon} alt={`${brandName} 로고`} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

import styled from 'styled-components';
import {
  BRANDS_IMAGE,
  type CardBrandName,
} from '../../constant/cardBrands';

const CardBrandLogo = ({ brandName }: { brandName: CardBrandName | null }) => {
  if (brandName === null) return null;

  return <BrandLogoImg src={BRANDS_IMAGE[brandName]} alt={brandName} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

import styled from 'styled-components';
import type { CardBrandName } from '../../constant/cardBrands';
import { getCardBrandImage } from '../../utils/cardDisplay';

const CardBrandLogo = ({ brandName }: { brandName: CardBrandName | null }) => {
  if (brandName === null) return null;

  const brandImage = getCardBrandImage(brandName);

  if (brandImage === null) return null;

  return <BrandLogoImg src={brandImage} alt={brandName} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

import styled from 'styled-components';
import type { CardBrandName } from '../../../../common/types/CardPreview';
import { BRANDS_IMAGE } from '../../constant/CARD_BRANDS';

const CardBrandLogo = ({ brandName }: { brandName: CardBrandName | null }) => {
  if (brandName === null) return null;

  return <BrandLogoImg src={BRANDS_IMAGE[brandName]} alt={brandName} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

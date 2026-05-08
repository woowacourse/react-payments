import styled from 'styled-components';
import {CARD_BRANDS} from '../../../domain/cardBrand';
import type {CardBrandType} from '../../../domain/cardBrand';

const CardBrandLogo = ({brandName}: {brandName: CardBrandType | null}) => {
  if (brandName === null) return null;

  return <BrandLogoImg src={CARD_BRANDS[brandName].imageUrl} alt={brandName} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

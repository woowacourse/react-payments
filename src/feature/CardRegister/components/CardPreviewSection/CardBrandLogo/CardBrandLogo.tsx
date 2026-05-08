import styled from 'styled-components';
import {BRAND_IMAGES} from '../../../domain/cardPolicy';
import type {CardBrandType} from '../../../domain/cardPolicy';

const CardBrandLogo = ({brandName}: {brandName: CardBrandType | null}) => {
  if (brandName === null) return null;

  return <BrandLogoImg src={BRAND_IMAGES[brandName]} alt={brandName} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

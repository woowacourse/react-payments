import visaImg from '../../../../../../public/images/Visa.png';
import masterCardImg from '../../../../../../public/images/Mastercard.png';
import styled from 'styled-components';

type BrandName = 'visa' | 'masterCard' | null;

const CardBrandLogo = ({brandName}: {brandName: BrandName}) => {
  if (brandName === null) return null;

  return <BrandLogoImg src={brandName === 'visa' ? visaImg : masterCardImg} />;
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

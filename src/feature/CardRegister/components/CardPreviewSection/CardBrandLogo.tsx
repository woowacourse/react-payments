import styled from 'styled-components';
import type { CardTypeName } from '../../../../common/types/CardPreview';

const VISA_IMAGE_PATH = '/images/Visa.png';
const MASTER_CARD_IMAGE_PATH = '/images/Mastercard.png';

const CardBrandLogo = ({ brandName }: { brandName: CardTypeName }) => {
  if (brandName === null) return null;

  return (
    <BrandLogoImg
      src={brandName === 'visa' ? VISA_IMAGE_PATH : MASTER_CARD_IMAGE_PATH}
    />
  );
};

const BrandLogoImg = styled.img`
  width: 36px;
  border-radius: 4px;
`;

export default CardBrandLogo;

import MasterCard from '../../../assets/Mastercard.png';
import Visa from '../../../assets/Visa.png';
import AMEX from '../../../assets/AMEX.png';
import Diners from '../../../assets/Diners.png';
import UnionPay from '../../../assets/UnionPay.png';
import type { CardBrand } from '../../../utils/Validation';
import { EmptyImg, StyledImg } from './CardBrandImage.styles';

interface Props {
  brand: CardBrand;
}

const BRAND_LOGOS: Record<string, string> = {
  Visa,
  MasterCard,
  AMEX,
  Diners,
  UnionPay,
};

const CardBrandImage = ({ brand }: Props) => {
  const logo = BRAND_LOGOS[brand];

  if (logo) {
    return <StyledImg src={logo} alt={`${brand} 로고 이미지`} />;
  }

  return <EmptyImg />;
};

export default CardBrandImage;

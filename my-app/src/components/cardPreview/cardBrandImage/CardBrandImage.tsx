import MasterCard from "../../../assets/Mastercard.png";
import Visa from "../../../assets/Visa.png";
import type { CardBrand } from "../../../utils/Validation";
import { EmptyImg, StyledImg } from "./CardBrandImage.styles";

interface Props {
    brand: CardBrand,
}

const CardBrandImage = ({ brand }: Props) => {
    if (brand === 'Visa') {
    return <StyledImg src={Visa} alt="Visa 로고 이미지" />;
  }

  if (brand === 'MasterCard') {
    return <StyledImg src={MasterCard} alt="MasterCard 로고 이미지" />;
  }

  return <EmptyImg />;
};

export default CardBrandImage;

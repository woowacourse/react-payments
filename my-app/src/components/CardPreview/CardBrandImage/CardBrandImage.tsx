import {
  CARD_BRAND_IMAGES,
  type CardBrand,
} from '../../../constants/cardBrand';
import { EmptyImg, StyledImg } from './CardBrandImage.styles';

interface Props {
  cardBrand: CardBrand | '';
}

export default function CardBrandImage({ cardBrand }: Props) {
  if (!cardBrand) {
    return <EmptyImg />;
  }

  return (
    <StyledImg
      src={CARD_BRAND_IMAGES[cardBrand]}
      alt={`${cardBrand} 로고 이미지`}
    />
  );
}

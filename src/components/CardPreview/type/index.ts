import { CardBrandType } from '../../CardBrand/CardBrand';

export interface CardPreviewProps {
  cardNumber: Record<string, string>;
  cardExpirationDate: Record<string, string>;
  CardBrandType: CardBrandType | null;
}

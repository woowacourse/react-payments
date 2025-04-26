import { CardBrandType } from '../../../domain/card/CardBrand/CardBrand';

export interface CardPreviewProps {
  cardNumber: Record<string, string>;
  cardExpirationDate: Record<string, string>;
  CardBrandType: CardBrandType | null;
}

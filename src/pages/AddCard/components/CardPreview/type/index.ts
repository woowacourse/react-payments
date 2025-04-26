import { CardBrandType } from '../../../../../domain/card/CardBrand/types';

export interface CardPreviewProps {
  cardNumber: Record<string, string>;
  cardExpirationDate: Record<string, string>;
  CardBrandType: CardBrandType | null;
}

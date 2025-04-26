import { CardBrandType } from '../../../../../domain/card/CardBrand/type';

export interface CardPreviewProps {
  cardNumber: Record<string, string>;
  cardExpirationDate: Record<string, string>;
  CardBrandType: CardBrandType | null;
}

import type { CardBrandValue } from './CardBrandValue';

export interface CardListItemDTO {
    id: number;
    cardNumber: number;
    expDate: string;
    cardIssuer: CardBrandValue;
}

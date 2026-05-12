import { BRAND_SELECT_OPTIONS } from '../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from './CardBrandValue';

export interface CardAddCompleteState {
    cardNumberPrefix: string;
    cardBrand: CardBrandValue;
}

const VALID_CARD_BRANDS = BRAND_SELECT_OPTIONS.map((o) => o.value);

export const isCardAddCompleteState = (state: unknown): state is CardAddCompleteState => {
    if (typeof state !== 'object' || state === null) return false;
    const { cardNumberPrefix, cardBrand } = state as Record<string, unknown>;
    return typeof cardNumberPrefix === 'string' && VALID_CARD_BRANDS.includes(cardBrand as CardBrandValue);
};

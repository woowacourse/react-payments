import { CARD_TYPE_LIST, CARD_COLOR } from "../constants";

export type CardType = (typeof CARD_TYPE_LIST)[number];
export type CardTypeColor = (typeof CARD_COLOR)[CardType];

import { CARD_TYPE_LIST, CARD_TYPE_COLOR } from "@card/CardType/constants";

export type CardType = (typeof CARD_TYPE_LIST)[number];
export type CardTypeColor = (typeof CARD_TYPE_COLOR)[CardType];

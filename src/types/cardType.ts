import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

export type CardDetailType = typeof CARD_NUMBER | typeof CARD_PERIOD | typeof CARD_OWNER;
export type SectionType = typeof CARD_NUMBER.type | typeof CARD_PERIOD.type | typeof CARD_OWNER.type;

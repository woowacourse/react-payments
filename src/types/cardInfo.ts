import { TYPES } from 'store/card/types';
import { CARD_COMPANIES } from 'lib/constants';

type CardColor =
  | '#E24141'
  | '#547CE4'
  | '#73BC6D'
  | '#DE59B9'
  | '#04C09E'
  | '#E76E9A'
  | '#F37D3B'
  | '#FBCD58';

type CardAction = { type: typeof TYPES; cards: typeof CARD_COMPANIES };

export type { CardColor, CardAction };

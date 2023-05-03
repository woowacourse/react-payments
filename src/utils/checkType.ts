import { Card, CardInfoOption } from '../type/card';

export function isCardInfoOption(
  value: string,
  card: Card
): value is CardInfoOption {
  return Object.keys(card).includes(value);
}

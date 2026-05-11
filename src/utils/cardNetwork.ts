import {
  CARD_NETWORKS,
  DEFAULT_CARD_NUMBER_SEGMENTS,
} from '../constants/constants';

type NetworkKey = keyof typeof CARD_NETWORKS;

export function detectCardNetwork(cardNumber: string): NetworkKey | null {
  for (const name of Object.keys(CARD_NETWORKS) as NetworkKey[]) {
    const network = CARD_NETWORKS[name];

    if ('prefixes' in network) {
      if (network.prefixes.some((prefix) => cardNumber.startsWith(prefix))) {
        return name;
      }
    }

    if ('ranges' in network) {
      for (const { from, to } of network.ranges) {
        const digits = String(from).length;
        const head = Number(cardNumber.slice(0, digits));
        if (head >= from && head <= to) return name;
      }
    }
  }
  return null;
}

export function getCardNumberSegments(cardNumber: string): readonly number[] {
  const network = detectCardNetwork(cardNumber);
  return network ? CARD_NETWORKS[network].segments : DEFAULT_CARD_NUMBER_SEGMENTS;
}

export function reshapeCardNumber(
  cardNumber: string[],
  index: number,
  newValue: string,
): string[] {
  const updated = [...cardNumber];
  updated[index] = newValue;

  const joined = updated.join('');
  const newSegments = getCardNumberSegments(joined);

  if (newSegments.length !== updated.length) {
    const result = Array(newSegments.length).fill('');
    result[0] = updated[0];
    return result;
  }
  return updated;
}

import Visa from '@assets/visa.png';
import MasterCard from '@assets/mastercard.png';
import { CardNumbers } from '@/types/CardNumbers';

const CARD_NETWORKS = [
  {
    prefixes: ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
    name: 'visa',
    image: Visa,
  },
  {
    prefixes: ['51', '52', '53', '54', '55'],
    name: 'master',
    image: MasterCard,
  },
];

const getCardNetwork = (cardNumbers: CardNumbers) => {
  const cardNumberPrefix = String(cardNumbers.firstNumber).slice(0, 2);
  const cardNetwork = CARD_NETWORKS.find((network) =>
    network.prefixes.includes(cardNumberPrefix)
  );

  return cardNetwork;
};

export default getCardNetwork;

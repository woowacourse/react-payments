import { MASTER_CARD_PREFIXES, VISA_CARD_PREFIXES } from '../constants/setting';

function getCardType(cardFirstNumber: string): CardType {
  for (const prefix of VISA_CARD_PREFIXES) {
    if (cardFirstNumber.startsWith(prefix)) return 'VISA';
  }
  for (const prefix of MASTER_CARD_PREFIXES) {
    if (cardFirstNumber.startsWith(prefix)) return 'MasterCard';
  }

  return 'None';
}

export default getCardType;

import Validation from './Validation';
import { CARD_PREFIX_PATTERNS } from '../constants/conditions';

export default function checkCardBrand(numbers: string) {
  if (isVisa(numbers)) return 'Visa';
  if (isMasterCard(numbers)) return 'MasterCard';
  return '';
}

function isVisa(value: string) {
  return Number(value.charAt(0)) === CARD_PREFIX_PATTERNS.VISA_PREFIX;
}

function isMasterCard(value: string) {
  return Validation.isNumberInRange({
    min: CARD_PREFIX_PATTERNS.MASTER_CARD_PREFIX_MIN,
    max: CARD_PREFIX_PATTERNS.MASTER_CARD_PREFIX_MAX,
    number: Number(value.slice(0, 2)),
  });
}

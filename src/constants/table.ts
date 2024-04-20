import Visa from '../../asset/Visa.svg';
import MasterCard from '../../asset/Mastercard.svg';

const BRAND_TABLE: Record<CardBrand, string> = {
  Visa: Visa,
  MasterCard: MasterCard,
  none: '',
};

export default BRAND_TABLE;

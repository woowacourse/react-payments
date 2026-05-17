import AmericanExpressSvg from '@/entities/card/config/AmericanExpress.svg';
import DinersSvg from '@/entities/card/config/Diners.svg';
import UnionPaySvg from '@/entities/card/config/UnionPay.svg';
import MastercardSvg from '@/entities/card/config/Mastercard.svg';
import VisaSvg from '@/entities/card/config/Visa.svg';

import { type CardBrand } from '../model/cardNumber';

export const BRAND_SVG_MAP: Record<CardBrand, string | undefined> = {
  VISA: VisaSvg,
  MASTERCARD: MastercardSvg,
  AMEX: AmericanExpressSvg,
  DINERS: DinersSvg,
  UNIONPAY: UnionPaySvg,
};

import AmericanExpressSvg from './assets/AmericanExpress.svg';
import DinersSvg from './assets/Diners.svg';
import UnionPaySvg from './assets/UnionPay.svg';
import MastercardSvg from './assets/Mastercard.svg';
import VisaSvg from './assets/Visa.svg';

import { type Brand } from './brand';

export const BRAND_SVG_MAP: Record<Brand, string | undefined> = {
  VISA: VisaSvg,
  MASTERCARD: MastercardSvg,
  AMEX: AmericanExpressSvg,
  DINERS: DinersSvg,
  UNIONPAY: UnionPaySvg,
  UNKNOWN: undefined,
};

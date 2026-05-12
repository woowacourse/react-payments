import AmericanExpressSvg from './assets/AmericanExpress.svg?react';
import DinersSvg from './assets/Diners.svg?react';
import UnionPaySvg from './assets/UnionPay.svg?react';
import MastercardSvg from './assets/Mastercard.svg?react';
import VisaSvg from './assets/Visa.svg?react';

import type { ReactNode } from 'react';
import { type Brand } from './brand';

export const BRAND_SVG_MAP: Record<Brand, ReactNode> = {
  VISA: <VisaSvg />,
  MASTERCARD: <MastercardSvg />,
  AMEX: <AmericanExpressSvg />,
  DINERS: <DinersSvg />,
  UNIONPAY: <UnionPaySvg />,
  UNKNOWN: undefined,
};

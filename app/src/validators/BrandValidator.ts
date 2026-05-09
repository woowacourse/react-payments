import type { NetworkBrand } from '../context/CardContext.ts';

type BrandResult =
  | { brand: NetworkBrand; valid: true }
  | { brand: NetworkBrand; valid: false; message: string };

export const BrandValidator = {
  isUnionPay(value: string) {
    return (
      /^622(1[2-9][6-9]|[2-9]\d{2})/.test(value) ||
      /^62[4-6]/.test(value) ||
      /^628[2-8]/.test(value)
    );
  },

  isPossibleUnionPayFormat(value: string): boolean {
    return /^6(2(2(1([2-9]([6-9]?)?)?|[2-9]\d{0,2})?|[4-6]\d{0,3}|8[2-8]\d{0,2})?)?$/.test(value);
  },

  detectNetworkBrand(joinedValue: string): BrandResult {
    if (joinedValue === '') {
      return { brand: '', valid: true };
    }

    if (/^4/.test(joinedValue)) {
      return { brand: 'visa', valid: true };
    }

    if (/^5[1-5]/.test(joinedValue)) {
      return { brand: 'master', valid: true };
    }

    if (/^36/.test(joinedValue)) {
      return { brand: 'diners', valid: true };
    }

    if (/^3[47]/.test(joinedValue)) {
      return { brand: 'amex', valid: true };
    }

    if (this.isUnionPay(joinedValue)) {
      return { brand: 'unionpay', valid: true };
    }

    if (!this.isPossibleUnionPayFormat(joinedValue)) {
      return { brand: '', valid: false, message: '유효한 카드번호 형식이 아닙니다.' };
    }

    const isPossibleFormat =
      /^5$/.test(joinedValue) || /^3$/.test(joinedValue) || /^6/.test(joinedValue);

    if (!isPossibleFormat) {
      return { brand: '', valid: false, message: '유효한 카드번호 형식이 아닙니다.' };
    }

    return { brand: '', valid: true };
  },
};

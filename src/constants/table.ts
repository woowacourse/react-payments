import Visa from '../asset/Visa.svg';
import MasterCard from '../asset/Mastercard.svg';

export const BRAND_TABLE: Record<CardBrand, string> = {
  Visa: Visa,
  MasterCard: MasterCard,
  none: '',
};

export const COMPANY_TABLE: Record<string, Record<string, string>> = {
  BC카드: { background: '#F04651', font: '#FFFFFF' },
  신한카드: { background: '#0046FF', font: '#FFFFFF' },
  카카오뱅크: { background: '#FFE600', font: '#333333' },
  현대카드: { background: '#000000', font: '#FFFFFF' },
  우리카드: { background: '#007BC8', font: '#FFFFFF' },
  롯데카드: { background: '#ED1C24', font: '#FFFFFF' },
  하나카드: { background: '#009490', font: '#FFFFFF' },
  국민카드: { background: '#6A6056', font: '#FFFFFF' },
};

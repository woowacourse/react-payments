import type {
  CardBrand,
  CardBrandOrNone,
  CardBrandRule,
  InputFieldConfig,
  KoreanCardCompany,
} from '../types';
import visaIcon from '../assets/visa.svg';
import masterIcon from '../assets/mastercard.svg';
import amexIcon from '../assets/american-express.svg';
import dinersIcon from '../assets/diners-club.svg';
import unionpayIcon from '../assets/china-unionpay.svg';

export const CARD_BRAND_RULES: Record<CardBrand, CardBrandRule> = {
  VISA: {
    brand: 'VISA',
    totalLength: 16,
    segmentLengths: [4, 4, 4, 4],
    cvcLength: 3,
    label: 'Visa',
  },
  MASTER: {
    brand: 'MASTER',
    totalLength: 16,
    segmentLengths: [4, 4, 4, 4],
    cvcLength: 3,
    label: 'MasterCard',
  },
  AMEX: {
    brand: 'AMEX',
    totalLength: 15,
    segmentLengths: [4, 6, 5],
    cvcLength: 4,
    label: 'American Express',
  },
  DINERS: {
    brand: 'DINERS',
    totalLength: 14,
    segmentLengths: [4, 6, 4],
    cvcLength: 3,
    label: 'Diners Club',
  },
  UNIONPAY: {
    brand: 'UNIONPAY',
    totalLength: 16,
    segmentLengths: [4, 4, 4, 4],
    cvcLength: 3,
    label: 'UnionPay',
  },
} as const;

export const BRAND_LOGO_MAP: Record<CardBrandOrNone, string> = {
  VISA: visaIcon,
  MASTER: masterIcon,
  AMEX: amexIcon,
  DINERS: dinersIcon,
  UNIONPAY: unionpayIcon,
  NONE: '',
} as const;

export const DEFAULT_SEGMENT_LENGTHS = [4, 4, 4, 4] as const;
export const DEFAULT_CVC_LENGTH = 3 as const;

export const KOREAN_CARD_COMPANIES: Record<
  KoreanCardCompany,
  { label: string; color: string; issuerCode: string }
> = {
  BC: { label: 'BC카드', color: '#F04651', issuerCode: '31' },
  SHINHAN: { label: '신한카드', color: '#0046FF', issuerCode: '41' },
  KAKAO_BANK: { label: '카카오뱅크', color: '#FFE600', issuerCode: '15' },
  HYUNDAI: { label: '현대카드', color: '#000000', issuerCode: '61' },
  WOORI: { label: '우리카드', color: '#007BC8', issuerCode: 'W1' },
  LOTTE: { label: '롯데카드', color: '#ED1C24', issuerCode: '71' },
  HANA: { label: '하나카드', color: '#009490', issuerCode: '21' },
  KB: { label: '국민카드', color: '#6A6056', issuerCode: '11' },
} as const;

export function getCompanyByIssuerCode(issuerCode: string) {
  const company = Object.values(KOREAN_CARD_COMPANIES).find((e) => e.issuerCode === issuerCode);
  if (!company) {
    throw new Error(`알 수 없는 issuerCode(${issuerCode})입니다.`);
  }
  return company;
}

export const ERROR_MESSAGE = {
  INVALID_CARD_BRAND_NUMBER: '유효한 카드 브랜드 번호를 입력해주세요.',
  NAN: '숫자만 입력 가능합니다.',
  MAX_LENGTH: (length: number) => `숫자는 ${length}자리를 입력해야 합니다.`,
  INVALID_MONTH: '월은 1~12 사이의 숫자만 입력 가능합니다.',
  INVALID_YEAR: '년도는 현재 년도 이상만 입력 가능합니다.',
  INVALID_EXPIRATION_DATE: '유효기간은 현재 이후여야 합니다.',
} as const;

export const INPUT_FIELD_CONFIG: Record<string, InputFieldConfig> = {
  CARD_NUMBERS: {
    sectionTitle: '결제할 카드 번호를 입력해 주세요',
    hintText: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
    placeholder: ['1234', '1234', '1234', '1234'],
  },
  EXPIRATION_DATE: {
    sectionTitle: '카드 유효기간을 입력해 주세요',
    hintText: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    label: '유효 기간',
    placeholder: ['MM', 'YY'],
  },
  CVC: {
    sectionTitle: 'CVC 번호를 입력해 주세요',
    label: 'CVC',
    placeholder: ['123'],
  },
  PASSWORD: {
    sectionTitle: '비밀번호를 입력해 주세요',
    hintText: '앞의 2자리를 입력해주세요',
    label: '비밀번호 앞 2자리',
    placeholder: [''],
  },
  CARD_COMPANY: {
    sectionTitle: '카드사를 선택해 주세요',
    label: '카드사',
    placeholder: ['카드사를 선택해주세요'],
  },
} as const;

export const VALIDATION_RULE = {
  EXPIRATION_DATE_LENGTH: 2,
  PASSWORD_LENGTH: 2,
  MAX_MONTH: 12,
} as const;

export const ROUTES = {
  HOME: '/',
  CARDS: '/cards',
} as const;

export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

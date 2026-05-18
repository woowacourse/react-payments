export const BANK = {
  BC: 'BC',
  SHINHAN: 'SHINHAN',
  KAKAOBANK: 'KAKAOBANK',
  HYUNDAI: 'HYUNDAI',
  WOORI: 'WOORI',
  LOTTE: 'LOTTE',
  HANA: 'HANA',
  KOOKMIN: 'KOOKMIN',
} as const;

export type Bank = (typeof BANK)[keyof typeof BANK];
export const BANKS = Object.values(BANK) as Bank[];

export type Code = '31' | '41' | '15' | '61' | 'W1' | '71' | '21' | '11';
interface BankConfig {
  color: string;
  label: string;
  code: Code;
}

export const BANK_RULES: Record<Bank, BankConfig> = {
  BC: { color: 'red', label: 'BC카드', code: '31' },
  SHINHAN: { color: 'blue', label: '신한카드', code: '41' },
  KAKAOBANK: { color: 'yellow', label: '카카오뱅크', code: '15' },
  HYUNDAI: { color: 'black', label: '현대카드', code: '61' },
  WOORI: { color: 'sky', label: '우리카드', code: 'W1' },
  LOTTE: { color: 'orange', label: '롯데카드', code: '71' },
  HANA: { color: 'teal', label: '하나카드', code: '21' },
  KOOKMIN: { color: 'gray', label: '국민카드', code: '11' },
};

export const ISSUER_CODE_BANK: Record<Code, Bank> = {
  '31': 'BC',
  '41': 'SHINHAN',
  '15': 'KAKAOBANK',
  '61': 'HYUNDAI',
  W1: 'WOORI',
  '71': 'LOTTE',
  '21': 'HANA',
  '11': 'KOOKMIN',
};

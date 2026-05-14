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
interface BankConfig {
  className: string;
  label: string;
}

export const BANK_RULES: Record<Bank, BankConfig> = {
  BC: { className: 'bc', label: 'BC카드' },
  SHINHAN: { className: 'shinhan', label: '신한카드' },
  KAKAOBANK: { className: 'kakaobank', label: '카카오뱅크' },
  HYUNDAI: { className: 'hyundai', label: '현대카드' },
  WOORI: { className: 'woori', label: '우리카드' },
  LOTTE: { className: 'lotte', label: '롯데카드' },
  HANA: { className: 'hana', label: '하나카드' },
  KOOKMIN: { className: 'kookmin', label: '국민카드' },
};

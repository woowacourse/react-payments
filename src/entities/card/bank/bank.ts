export type Bank =
  | 'unknown'
  | 'bc'
  | 'shinhan'
  | 'kakaobank'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kookmin';

export const BANKS = [
  'unknown',
  'bc',
  'shinhan',
  'kakaobank',
  'hyundai',
  'woori',
  'lotte',
  'hana',
  'kookmin',
] as const satisfies Bank[];

export const BANK_CONFIG: Record<Bank, { label: string; color: string }> = {
  unknown: { label: '카드사 선택', color: '#333333' },
  bc: { label: 'BC카드', color: '#f04651' },
  shinhan: { label: '신한카드', color: '#0046ff' },
  kakaobank: { label: '카카오뱅크', color: '#ffe600' },
  hyundai: { label: '현대카드', color: '#000000' },
  woori: { label: '우리카드', color: '#007bc8' },
  lotte: { label: '롯데카드', color: '#ed1c24' },
  hana: { label: '하나카드', color: '#009490' },
  kookmin: { label: '국민카드', color: '#6a6056' },
};

interface CardInfo {
  id: string;
  company: string;
  theme: string;
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  expireMonth: string;
  expireYear: string;
  ownerName: string;
  securityCode: string;
  firstPassword: string;
  secondPassword: string;
}

type CardCompanyType =
  | '안 카드'
  | '돔하디 카드'
  | '마르코 카드'
  | '록바 카드'
  | '민초 카드'
  | '후이 카드'
  | '무비 카드'
  | '소피아 카드';

type CardThemeType = 'blue' | 'red' | 'green' | 'hot-pink' | 'mint' | 'pink' | 'orange' | 'yellow';

export type { CardInfo, CardCompanyType, CardThemeType };

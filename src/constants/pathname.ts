export const PATHNAME = {
  HOME: '/',
  REGISTER: '/register',
  CARD_ALIAS: '/alias',
} as const;

export type PageTitle = Record<'/' | '/register' | '/alias', string>;

export const PAGE_TITLE: PageTitle = {
  '/': '보유 카드',
  '/register': '카드 추가',
  '/alias': '',
} as const;

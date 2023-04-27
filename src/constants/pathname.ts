export const PATHNAME = {
  HOME: '/',
  REGISTER: '/register',
} as const;

export type PageTitle = Record<'/' | '/register', string>;

export const PAGE_TITLE: PageTitle = {
  '/': '보유 카드',
  '/register': '카드 추가',
} as const;

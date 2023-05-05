export const PATHNAME = {
  HOME: '/',
  REGISTER: '/register',
  NICKNAME: '/nickname',
} as const;

export type PageTitle = Record<'/' | '/register' | '/nickname', string>;

export const PAGE_TITLE: PageTitle = {
  '/': '보유 카드',
  '/register': '카드 추가',
  '/nickname': '',
} as const;

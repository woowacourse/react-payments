export const PATHNAME = {
  HOME: '/',
  REGISTER: '/register',
  LOADING: '/loading',
  NICKNAME: '/nickname',
} as const;

export type PageTitle = Record<
  '/' | '/register' | '/loading' | '/nickname',
  string
>;

export const PAGE_TITLE: PageTitle = {
  [PATHNAME.HOME]: '보유 카드',
  [PATHNAME.REGISTER]: '카드 추가',
  [PATHNAME.LOADING]: '',
  [PATHNAME.NICKNAME]: '',
} as const;

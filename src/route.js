export const ROUTE = {
  home: { pageTitle: '홈 화면', route: '/' },
  addCard: { pageTitle: '카드 추가', route: '/add' },
  cardList: { pageTitle: '보유 카드', route: '/list' },
  addCardSuccess: { pageTitle: '별칭 추가', route: '/add/success' },
};

export const PAGE_TITLE = {
  [ROUTE.home.route]: ROUTE.home.pageTitle,
  [ROUTE.addCard.route]: ROUTE.addCard.pageTitle,
  [ROUTE.cardList.route]: ROUTE.cardList.pageTitle,
  [ROUTE.addCardSuccess.route]: ROUTE.addCardSuccess.pageTitle,
};

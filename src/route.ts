export const ROUTE = {
  home: { pageTitle: '결제 화면', route: '/' },
  cardList: { pageTitle: '보유 카드', route: '/cardlist' },
  addCard: { pageTitle: '카드 추가', route: '/cardlist/add' },
  editCard: { pageTitle: '카드 수정', route: '/cardlist/edit' },
  cardSuccess: { pageTitle: '별칭 추가', route: '/cardlist/success' },
};

export const PAGE_TITLE = {
  [ROUTE.home.route]: ROUTE.home.pageTitle,
  [ROUTE.addCard.route]: ROUTE.addCard.pageTitle,
  [ROUTE.cardList.route]: ROUTE.cardList.pageTitle,
  [ROUTE.editCard.route]: ROUTE.editCard.pageTitle,
  [ROUTE.cardSuccess.route]: ROUTE.cardSuccess.pageTitle,
};

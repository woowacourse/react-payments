interface Page {
  readonly NAME: string;
  readonly PATH: string;
}

interface PageRecord {
  [key: string]: Page;
}

const PAGE: PageRecord = {
  CARD_LIST: {
    NAME: '보유카드',
    PATH: '/',
  },
  ADD_CARD: {
    NAME: '카드추가',
    PATH: '/add-card',
  },
};

export default PAGE;

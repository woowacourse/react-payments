import type {CardResponse, CreateCardRequest} from '@/domain/card/cardApi.types';

type StoredCard = CreateCardRequest & {
  id: string;
};

let cards: StoredCard[] = [];

const VISIBLE_PREFIX_LENGTH = 6;
const VISIBLE_SUFFIX_LENGTH = 4;

// 앞 ${VISIBLE_PREFIX_LENGTH}자리, 뒤 ${VISIBLE_SUFFIX_LENGTH}자리를 제외한 중간 숫자를 *로 마스킹
const maskCardNumber = (number: string) => {
  const visiblePrefix = number.slice(0, VISIBLE_PREFIX_LENGTH);
  const visibleSuffix = number.slice(-VISIBLE_SUFFIX_LENGTH);
  const maskedLength = number.length - visiblePrefix.length - visibleSuffix.length;

  return `${visiblePrefix}${'*'.repeat(maskedLength)}${visibleSuffix}`;
};

// 카드 등록 성공 시 mock 서버 저장소(cards)에 카드를 추가
export const addMockCard = (card: CreateCardRequest): StoredCard => {
  // 방어적 복사!
  const newCard = {
    ...card,
    id: crypto.randomUUID(),
  };

  //카피 온 라이트!
  cards = [...cards, newCard];
  return newCard;
};

// 저장된 카드를 API 응답 형식으로 변환해 반환
export const getMockCards = (): CardResponse[] =>
  cards.map(({id, issuerCode, number, expirationDate}) => ({
    id,
    issuerCode,
    number: maskCardNumber(number),
    expirationDate,
  }));

// id가 일치하는 카드를 제거 (멱등 삭제 적용)
export const deleteMockCard = (id: string) => {
  cards = cards.filter((card) => card.id !== id);
};

// mock 서버 저장소를 초기화
export const resetMockCards = () => {
  cards = [];
};

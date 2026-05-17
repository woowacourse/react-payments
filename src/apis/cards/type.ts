export interface CardDto {
  id: string;
  cardCompany: string;
  cardNumbers: string[];
  expirationPeriod: string[];
  cvc: string;
}

export type CardList = Omit<CardDto, 'cvc'>[];

// 카드 목록 조회
export type GetCardsResponse = CardList;

// 카드 등록
export type CreateCardRequest = Omit<CardDto, 'id'>;
export type CreateCardResponse = Pick<CardDto, 'id'>;

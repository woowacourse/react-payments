export type CardNumbers = [string, string, string, string];
export type CardIssuer =
  | 'BcCard'
  | 'ShinhanCard'
  | 'KakaoBank'
  | 'HyndaiCard'
  | 'WooriCard'
  | 'LotteCard'
  | 'HanaCard'
  | 'KBCard';

export type CardExpiredDate = [string, string];
export interface CardInfo {
  cardNumbers: CardNumbers;
  cardIssuer: CardIssuer;
  expiredDate: CardExpiredDate;
  cardHolder: string;
}

export type Path = '/payments' | '/wrong-access' | '/complete-payment-register';

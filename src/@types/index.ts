type Card = {
  id: string;
  cardName: string[];
  cardCompany: string;
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

type CardRegisterForm = Omit<Card, 'cardName' | 'cardCompany'>;

export type { Card, CardRegisterForm };

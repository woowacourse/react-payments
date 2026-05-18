import fetcher from "@apis/fetcher";

const API_URL = "/api/cards";

interface Card {
  id: number;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export const getCards = async () => {
  return fetcher.get<Card[]>(API_URL);
};

interface RegisterCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}
export const registerCard = async (cardInfo: RegisterCardRequest) => {
  return fetcher.post(API_URL, cardInfo);
};

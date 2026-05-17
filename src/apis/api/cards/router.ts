import fetcher from "@apis/fetcher";

const API_URL = "/api/cards";

export const getCards = async () => {
  return fetcher.get(API_URL);
};

interface RegisterCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode?: string;
}
export const registerCard = async (cardInfo: RegisterCardRequest) => {
  return fetcher.post(API_URL, cardInfo);
};

import fetcher from "@apis/fetcher";

const getApiUrl = (id: string) => `/api/cards/${id}`;

export const deleteCard = async (id: string) => {
  return fetcher.delete(getApiUrl(id));
};

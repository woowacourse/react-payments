import fetcher from "@apis/fetcher";

const getApiUrl = (id: string) => `${import.meta.env.BASE_URL}api/cards/${id}`;

export const deleteCard = async (id: string) => {
  return fetcher.delete(getApiUrl(id));
};

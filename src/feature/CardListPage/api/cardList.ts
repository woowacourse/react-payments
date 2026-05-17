const BASE_URL = "https://woowa.yiheon.com";

export const fetchCardList = async () => {
  const response = await fetch(`${BASE_URL}/cards`);

  if (!response.ok) {
    throw new Error("카드 목록을 불러오지 못했습니다.");
  }

  return response.json();
};

import { BASE_URL } from "../../../shared/constants";

export const deleteCard = async (id: string) => {
  const response = await fetch(`${BASE_URL}/cards/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("카드 삭제에 실패했습니다.");
  }
};

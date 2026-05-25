export async function deleteCard(id: string) {
  const response = await fetch(`/api/cards/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('카드 삭제에 실패했습니다.');
  }
}

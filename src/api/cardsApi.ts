import type {CardErrorResponse, CardResponse, CreateCardRequest, CreateCardResponse} from '@/domain/card/cardApi.types';

const CARDS_ENDPOINT = '/cards';

// 실패 응답 body를 에러 객체 형식에 맞게 생성
const readCardApiError = async (response: Response): Promise<CardErrorResponse> => {
  try {
    const error = await response.json();

    return {
      code: error.code ?? 'INVALID_CARD_NUMBER',
      message: error.message ?? '카드 요청에 실패했습니다.',
    };
  } catch {
    return {
      code: 'INVALID_CARD_NUMBER',
      message: '카드 요청에 실패했습니다.',
    };
  }
};

// 카드 등록 요청을 보내고 서버가 생성한 id를 반환
export const createCard = async (card: CreateCardRequest): Promise<CreateCardResponse> => {
  const response = await fetch(CARDS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });

  if (!response.ok) throw await readCardApiError(response);

  return response.json();
};

// 서버에 저장된 카드 목록을 조회
export const getCards = async (): Promise<CardResponse[]> => {
  const response = await fetch(CARDS_ENDPOINT);

  if (!response.ok) throw await readCardApiError(response);

  return response.json();
};

// 일치하는 id의 카드 삭제
export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`${CARDS_ENDPOINT}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw await readCardApiError(response);
};

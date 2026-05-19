import type {CardErrorResponse, CardResponse, CreateCardRequest, CreateCardResponse} from '@/domain/card/cardApi.types';
import type {CardErrorCode} from '@/domain/card/cardApi.types';

const CARDS_ENDPOINT = '/cards';
const CARD_FIELD_ERROR_CODES: CardErrorCode[] = [
  'INVALID_CARD_NUMBER',
  'INVALID_CVC',
  'INVALID_EXPIRATION_DATE',
  'INVALID_ISSUER_CODE',
];
const UNKNOWN_CARD_API_ERROR: CardErrorResponse = {
  type: 'unknown',
  message: '카드 요청에 실패했습니다.',
};

const isCardErrorCode = (value: unknown): value is CardErrorCode =>
  typeof value === 'string' && CARD_FIELD_ERROR_CODES.includes(value as CardErrorCode);

const hasCardResponseFields = (card: unknown) => {
  if (!card || typeof card !== 'object') return false;

  const {id, issuerCode, number, expirationDate} = card as Record<string, unknown>;

  return [id, issuerCode, number, expirationDate].every((value) => typeof value === 'string');
};

const parseCardListResponse = (value: unknown): CardResponse[] => {
  if (!Array.isArray(value) || !value.every(hasCardResponseFields)) throw UNKNOWN_CARD_API_ERROR;

  return value as CardResponse[];
};

// 실패 응답 body를 에러 객체 형식에 맞게 생성
const readCardApiError = async (response: Response): Promise<CardErrorResponse> => {
  try {
    const error = await response.json();

    if (!isCardErrorCode(error.code) || typeof error.message !== 'string') return UNKNOWN_CARD_API_ERROR;

    return {
      type: 'field',
      code: error.code,
      message: error.message,
    };
  } catch {
    return UNKNOWN_CARD_API_ERROR;
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

  return parseCardListResponse(await response.json());
};

// 일치하는 id의 카드 삭제
export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`${CARDS_ENDPOINT}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw await readCardApiError(response);
};

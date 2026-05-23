import {http, HttpResponse} from 'msw';

import {CARD_ERROR_MESSAGES} from '@/domain/card/cardApi.types';
import type {CardErrorCode, CreateCardRequest} from '@/domain/card/cardApi.types';
import {addMockCard, deleteMockCard, getMockCards} from './cardStore';
import {validateCreateCardRequest} from './validators/cardRequestValidator';

const CARDS_ENDPOINT = '/cards';

// API 스펙의 400 응답 형식으로 에러를 생성
const createErrorResponse = (code: CardErrorCode) =>
  HttpResponse.json(
    {
      code,
      message: CARD_ERROR_MESSAGES[code],
    },
    {status: 400}
  );

export const handlers = [
  // 카드 추가
  http.post(CARDS_ENDPOINT, async ({request}) => {
    let requestBody;

    try {
      requestBody = await request.json();
    } catch {
      return createErrorResponse('INVALID_CARD_NUMBER');
    }

    const card = requestBody as Partial<CreateCardRequest>;
    const errorCode = validateCreateCardRequest(card);

    if (errorCode) return createErrorResponse(errorCode);

    const {id} = addMockCard(card as CreateCardRequest);
    return HttpResponse.json({id}, {status: 201});
  }),

  // 카드 조회
  http.get(CARDS_ENDPOINT, () => HttpResponse.json(getMockCards(), {status: 200})),

  // 카드 삭제
  http.delete(`${CARDS_ENDPOINT}/:id`, ({params}) => {
    deleteMockCard(String(params.id));
    return new HttpResponse(null, {status: 204});
  }),
];

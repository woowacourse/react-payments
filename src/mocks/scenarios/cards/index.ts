import { http, HttpResponse, delay } from 'msw';
import type { SCardList } from '../../datas/cards.type.ts';

export const getCardsScenarios = {
  empty: http.get('/cards', async () => {
    await delay(100);
    return HttpResponse.json([]);
  }),
  success: (data: SCardList) =>
    http.get('/cards', async () => {
      await delay(100);
      return HttpResponse.json(data);
    }),
  error: http.get('/cards', async () => {
    await delay(100);
    return new HttpResponse(null, { status: 500 });
  }),
};

export const postCardScenarios = {
  success: http.post('/cards', async () => {
    await delay(100);
    return HttpResponse.json({ id: 'new-card-id' }, { status: 201 });
  }),
  error: http.post('/cards', async () => {
    await delay(100);
    return new HttpResponse(null, { status: 500 });
  }),
  validationError: (code: string) =>
    http.post('/cards', async () => {
      await delay(100);
      return HttpResponse.json({ code, message: '유효하지 않은 입력입니다.' }, { status: 400 });
    }),
};

import { http, HttpResponse } from 'msw';

export const handler = http.get(`${import.meta.env.BASE_URL}cards`, async () => {
  // 전역 cards 객체 배열 순회하며 number에 maskNumber 반환값을 담아 전달
  return HttpResponse.json([
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      issuerCode: '31',
      number: '551112******9012',
      expirationDate: '12/28',
    },
  ]);
});

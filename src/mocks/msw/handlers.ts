import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/health', () => {
    return HttpResponse.json({});
  }),
];

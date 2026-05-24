import { http, HttpResponse } from 'msw';

import { handlers as cards } from './cards';

export const handlers = [
  http.get('/health', () => {
    return HttpResponse.json({});
  }),
  ...cards,
];

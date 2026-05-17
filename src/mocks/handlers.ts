import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('*/api/tutorial', () => {
    return HttpResponse.json({
      message: 'MSW tutorial mock is working.',
    });
  }),
];

import { describe, expect, it } from 'vitest';
import { http, HttpResponse } from 'msw';

import { server } from '../src/mocks/server';
import { requestCards } from '../src/api/requestCards';
import { postCard } from '../src/api/postCard';
import { deleteCard } from '../src/api/deleteCard';

import type { CardResponse } from '../src/types/cardStausTypes';

describe('cards api', () => {
  it('카드 목록을 조회한다.', async () => {
    const cards: CardResponse[] = [
      {
        id: '00000000-0000-4000-8000-000000000001',
        number: '123456******1234',
        expirationDate: '12/29',
        issuerCode: '비씨카드',
      },
    ];

    server.use(http.get('http://localhost/api/cards', () => HttpResponse.json(cards)));

    await expect(requestCards()).resolves.toEqual(cards);
  });

  it('카드 목록 조회에 실패하면 에러를 던진다.', async () => {
    server.use(
      http.get('http://localhost/api/cards', () => new HttpResponse(null, { status: 500 })),
    );

    await expect(requestCards()).rejects.toThrow('카드 목록을 불러오지 못했습니다.');
  });

  it('카드를 등록하고 생성된 카드 id를 반환한다.', async () => {
    const cardId = '00000000-0000-4000-8000-000000000002';

    server.use(
      http.post('http://localhost/api/cards', async ({ request }) => {
        const body = await request.json();

        expect(body).toEqual({
          number: '4111111111111111',
          expirationDate: '12/29',
          cvc: '123',
          issuerCode: 'bcCard',
        });

        return HttpResponse.json(cardId, { status: 201 });
      }),
    );

    await expect(
      postCard({
        number: '4111111111111111',
        expirationDate: '12/29',
        cvc: '123',
        issuerCode: 'bcCard',
      }),
    ).resolves.toBe(cardId);
  });

  it('카드 등록에 실패하면 서버 에러 메시지를 던진다.', async () => {
    server.use(
      http.post('http://localhost/api/cards', () =>
        HttpResponse.json(
          {
            code: 'INVALID_CARD_NUMBER',
            message: '유효하지 않은 카드 번호입니다.',
          },
          { status: 400 },
        ),
      ),
    );

    await expect(
      postCard({
        number: '1111111111111111',
        expirationDate: '12/29',
        cvc: '123',
        issuerCode: 'bcCard',
      }),
    ).rejects.toThrow('유효하지 않은 카드 번호입니다.');
  });

  it('카드 등록 시 유효하지 않은 유효기간이면 서버 에러 메시지를 던진다.', async () => {
    server.use(
      http.post('http://localhost/api/cards', () =>
        HttpResponse.json(
          {
            code: 'INVALID_EXPIRATION_DATE',
            message: '유효하지 않은 만료일입니다.',
          },
          { status: 400 },
        ),
      ),
    );

    await expect(
      postCard({
        number: '4111111111111111',
        expirationDate: '1/',
        cvc: '123',
        issuerCode: 'bcCard',
      }),
    ).rejects.toThrow('유효하지 않은 만료일입니다.');
  });

  it('카드 등록 시 유효하지 않은 CVC이면 서버 에러 메시지를 던진다.', async () => {
    server.use(
      http.post('http://localhost/api/cards', () =>
        HttpResponse.json(
          {
            code: 'INVALID_CVC',
            message: '유효하지 않은 CVC입니다.',
          },
          { status: 400 },
        ),
      ),
    );

    await expect(
      postCard({
        number: '4111111111111111',
        expirationDate: '12/29',
        cvc: '000',
        issuerCode: 'bcCard',
      }),
    ).rejects.toThrow('유효하지 않은 CVC입니다.');
  });

  it('카드를 삭제한다.', async () => {
    let requestedMethod = '';

    server.use(
      http.delete('http://localhost/api/cards/:id', ({ request, params }) => {
        requestedMethod = request.method;

        expect(params.id).toBe('card-id');

        return new HttpResponse(null, { status: 204 });
      }),
    );

    await expect(deleteCard('card-id')).resolves.toBeUndefined();
    expect(requestedMethod).toBe('DELETE');
  });

  it('카드 삭제에 실패하면 에러를 던진다.', async () => {
    server.use(
      http.delete('http://localhost/api/cards/:id', () => new HttpResponse(null, { status: 500 })),
    );

    await expect(deleteCard('card-id')).rejects.toThrow('카드 삭제에 실패했습니다.');
  });
});

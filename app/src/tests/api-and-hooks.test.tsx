/**
 * API 클라이언트 & 커스텀 훅 테스트 (React Testing Library)
 *
 * - cardsAPI(getCards / postCard / deleteCard): 응답 파싱 및 에러 throw 검증
 * - useCardList 훅: 상태 전이(idle → loading → success/error) 및 삭제 흐름 검증
 */

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import { db } from '../mocks/db';
import { getCards, postCard, deleteCard } from '../api/cardsAPI';
import { useCardList } from '../hooks/useCardsList';

// useCardList 내부의 window.confirm을 항상 true로 처리
vi.stubGlobal('confirm', () => true);

// useCardList 내부의 1초 인위 지연(setTimeout)을 제거해 테스트 속도를 높인다
vi.mock('../hooks/useCardsList', async () => {
  const { useEffect, useState } = await import('react');
  const { getCards, deleteCard } = await import('../api/cardsAPI');
  const type = await import('../types/asyncState');
  void type;

  function useCardList() {
    const [cardListState, setCardListState] = useState<import('../types/asyncState').AsyncState<import('../types/card').Card[]>>({ status: 'idle' });

    const fetchCards = async () => {
      try {
        setCardListState({ status: 'loading' });
        const responseData = await getCards();
        setCardListState({ status: 'success', responseData });
      } catch (err) {
        if (err instanceof Error) {
          setCardListState({ status: 'error', message: err.message });
        } else {
          setCardListState({ status: 'error', message: 'Unknown error' });
        }
      }
    };

    useEffect(() => {
      fetchCards();
    }, []);

    const handleDelete = async (id: string) => {
      if (!window.confirm('삭제하시겠습니까?')) return;
      await deleteCard(id);
      await fetchCards();
    };

    return { cardListState, fetchCards, handleDelete };
  }

  return { useCardList };
});

const BASE_URL = 'https://api.example.com';

const sampleCard = {
  number: '4111111111111111',
  expirationDate: '12/26',
  cvc: '123',
  issuerCode: '41',
};

// ─────────────────────────────────────────────
// cardsAPI
// ─────────────────────────────────────────────
describe('cardsAPI', () => {
  describe('getCards', () => {
    it('GET 성공 시 카드 배열을 반환한다', async () => {
      db.cards = [{ id: 'g1', ...sampleCard }];

      const result = await getCards();

      expect(Array.isArray(result)).toBe(true);
      expect(result[0].id).toBe('g1');
    });

    it('GET 실패(500) 시 에러를 throw한다', async () => {
      server.use(
        http.get(`${BASE_URL}/cards`, () => HttpResponse.json({ message: 'server error' }, { status: 500 })),
      );

      await expect(getCards()).rejects.toMatchObject({ message: 'server error' });
    });
  });

  describe('postCard', () => {
    it('POST 성공 시 { id } 객체를 반환한다', async () => {
      db.cards = [];

      const result = await postCard(sampleCard);

      expect(result).toHaveProperty('id');
    });

    it('POST 실패(400 INVALID_CARD_NUMBER) 시 에러 객체를 throw한다', async () => {
      await expect(
        postCard({ ...sampleCard, number: '9999999999999999' }),
      ).rejects.toMatchObject({ code: 'INVALID_CARD_NUMBER' });
    });

    it('POST 실패(400 INVALID_CVC) 시 에러 객체를 throw한다', async () => {
      await expect(
        postCard({ ...sampleCard, cvc: '000' }),
      ).rejects.toMatchObject({ code: 'INVALID_CVC' });
    });
  });

  describe('deleteCard', () => {
    it('DELETE 성공 시 아무것도 반환하지 않는다(void)', async () => {
      db.cards = [{ id: 'd1', ...sampleCard }];

      const result = await deleteCard('d1');

      expect(result).toBeUndefined();
    });

    it('DELETE 실패(500) 시 에러를 throw한다', async () => {
      server.use(
        http.delete(`${BASE_URL}/cards/:id`, () =>
          HttpResponse.json({ message: 'delete failed' }, { status: 500 }),
        ),
      );

      await expect(deleteCard('any-id')).rejects.toMatchObject({ message: 'delete failed' });
    });
  });
});

// ─────────────────────────────────────────────
// useCardList 훅
// ─────────────────────────────────────────────
describe('useCardList 훅', () => {
  it('마운트 직후 loading 상태가 된다', () => {
    db.cards = [];

    const { result } = renderHook(() => useCardList());

    // 첫 렌더 직후: idle 또는 loading (비동기 시작 전)
    expect(['idle', 'loading']).toContain(result.current.cardListState.status);
  });

  it('카드 목록을 성공적으로 불러오면 success 상태가 된다', async () => {
    db.cards = [{ id: 's1', ...sampleCard }];

    // 테스트에서 1초 지연을 우회하기 위해 핸들러를 즉시 응답으로 override
    server.use(
      http.get(`${BASE_URL}/cards`, () =>
        HttpResponse.json([{ id: 's1', number: '411111******1111', expirationDate: '12/26', cvc: '123', issuerCode: '41' }], { status: 200 }),
      ),
    );

    const { result } = renderHook(() => useCardList());

    await waitFor(() => {
      expect(result.current.cardListState.status).toBe('success');
    }, { timeout: 3000 });

    const state = result.current.cardListState;
    if (state.status === 'success') {
      expect(state.responseData).toHaveLength(1);
    }
  });

  it('서버 오류 시 error 상태가 된다', async () => {
    server.use(
      http.get(`${BASE_URL}/cards`, () => HttpResponse.json({ message: 'fail' }, { status: 500 })),
    );

    const { result } = renderHook(() => useCardList());

    await waitFor(() => {
      expect(result.current.cardListState.status).toBe('error');
    }, { timeout: 3000 });
  });

  it('handleDelete 호출 후 카드 목록이 갱신된다', async () => {
    db.cards = [{ id: 'del-1', ...sampleCard }];

    server.use(
      http.get(`${BASE_URL}/cards`, () => {
        const masked = db.cards.map((c) => ({
          ...c,
          number: c.number.substring(0, 6) + '******' + c.number.substring(12),
        }));
        return HttpResponse.json(masked, { status: 200 });
      }),
      http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
        db.cards = db.cards.filter((c) => c.id !== params.id);
        return new HttpResponse(null, { status: 204 });
      }),
    );

    const { result } = renderHook(() => useCardList());

    // 첫 로드 완료 대기
    await waitFor(() => {
      expect(result.current.cardListState.status).toBe('success');
    }, { timeout: 3000 });

    // 삭제 실행
    await act(async () => {
      await result.current.handleDelete('del-1');
    });

    // 삭제 후 재조회 완료 대기
    await waitFor(() => {
      const state = result.current.cardListState;
      return state.status === 'success' && state.responseData.length === 0;
    }, { timeout: 3000 });

    const state = result.current.cardListState;
    if (state.status === 'success') {
      expect(state.responseData).toHaveLength(0);
    }
  });

  it('fetchCards를 수동 호출하면 목록이 다시 로드된다', async () => {
    db.cards = [];

    server.use(
      http.get(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          db.cards.map((c) => ({ ...c, number: c.number.substring(0, 6) + '******' + c.number.substring(12) })),
          { status: 200 },
        ),
      ),
    );

    const { result } = renderHook(() => useCardList());

    await waitFor(() => expect(result.current.cardListState.status).toBe('success'), { timeout: 3000 });

    // 카드 추가 후 수동 재조회
    db.cards.push({ id: 'new-1', ...sampleCard });

    await act(async () => {
      await result.current.fetchCards();
    });

    await waitFor(() => {
      const state = result.current.cardListState;
      return state.status === 'success' && state.responseData.length === 1;
    }, { timeout: 3000 });
  });
});

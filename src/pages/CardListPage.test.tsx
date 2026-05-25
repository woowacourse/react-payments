import { http, HttpResponse } from 'msw';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { server } from '../mocks/server';
import { renderWithRouter, screen, waitFor } from '../test/utils';
import App from '../App';

describe('카드 목록 페이지', () => {
  test('빈 목록일 때 안내 문구가 표시된다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json([])));

    renderWithRouter(<App />, { route: '/cards' });

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });

  test('카드가 있을 때 카드 행과 + 카드 추가 버튼이 표시된다', async () => {
    server.use(
      http.get('/cards', () =>
        HttpResponse.json([
          { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' },
        ])
      )
    );

    renderWithRouter(<App />, { route: '/cards' });

    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('5511 **** **** 9012')).toBeInTheDocument();
    expect(screen.getByText('유효기간 12/28')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ 카드 추가' })).toBeInTheDocument();
  });

  test('GET 실패 시 에러 UI와 다시 시도 버튼이 표시된다', async () => {
    server.use(http.get('/cards', () => HttpResponse.error()));

    renderWithRouter(<App />, { route: '/cards' });

    expect(await screen.findByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
  });

  test('다시 시도 버튼 클릭 시 재요청되어 성공한다', async () => {
    const user = userEvent.setup();
    let callCount = 0;
    server.use(
      http.get('/cards', () => {
        callCount += 1;
        if (callCount === 1) return HttpResponse.error();
        return HttpResponse.json([]);
      })
    );

    renderWithRouter(<App />, { route: '/cards' });

    const retry = await screen.findByRole('button', { name: '다시 시도' });
    await user.click(retry);

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });

  test('삭제 — confirm 후 해당 카드가 목록에서 제거된다', async () => {
    const user = userEvent.setup();

    let cards = [
      { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' },
    ];
    server.use(
      http.get('/cards', () => HttpResponse.json(cards)),
      http.delete('/cards/:id', ({ params }) => {
        cards = cards.filter((c) => c.id !== params.id);
        return new HttpResponse(null, { status: 204 });
      })
    );

    vi.spyOn(window, 'confirm').mockReturnValue(true);

    renderWithRouter(<App />, { route: '/cards' });

    const deleteButton = await screen.findByRole('button', { name: '카드 삭제' });
    await user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText('BC카드')).not.toBeInTheDocument();
    });
    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });
});

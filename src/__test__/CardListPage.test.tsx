import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import { CardListPage } from '../components/CardListPage/CardListPage';

const SAMPLE_CARDS = [
  {
    id: '1',
    cardNumber: '5511 **** **** 9012',
    cardBrand: 'BC',
    expireDate: '12/28',
    cvc: '',
    cardPassword: '',
  },
  {
    id: '2',
    cardNumber: '4111 **** **** 1111',
    cardBrand: 'SHINHAN',
    expireDate: '06/30',
    cvc: '',
    cardPassword: '',
  },
];

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={['/cards']}>
      <CardListPage />
    </MemoryRouter>,
  );

describe('CardListPage', () => {
  it('성공 응답을 받으면 등록된 카드 목록을 보여준다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json(SAMPLE_CARDS)));

    renderPage();

    expect(await screen.findByText('BC카드')).toBeTruthy();
    expect(screen.getByText('신한카드')).toBeTruthy();
    expect(screen.getByText(/보유 카드.*\(2\)/)).toBeTruthy();
  });

  it('빈 목록이면 카드가 없다는 안내를 보여준다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json([])));

    renderPage();

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeTruthy();
    expect(screen.getByRole('button', { name: '카드 추가하기' })).toBeTruthy();
  });

  it('GET 실패 시 ErrorState를 보여주고 재시도 버튼이 다시 fetch한다', async () => {
    server.use(http.get('/cards', () => new HttpResponse(null, { status: 500 })));

    renderPage();

    const retryButton = await screen.findByRole('button', { name: '다시 시도' });
    expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeTruthy();

    server.use(http.get('/cards', () => HttpResponse.json(SAMPLE_CARDS)));

    retryButton.click();

    expect(await screen.findByText('BC카드')).toBeTruthy();
  });

  describe('카드 삭제', () => {
    beforeEach(() => {
      server.use(http.get('/cards', () => HttpResponse.json(SAMPLE_CARDS)));
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('confirm을 취소하면 DELETE 요청을 보내지 않는다', async () => {
      vi.spyOn(window, 'confirm').mockReturnValue(false);
      const deleteSpy = vi.fn();
      server.use(
        http.delete('/cards/:id', () => {
          deleteSpy();
          return new HttpResponse(null, { status: 204 });
        }),
      );

      renderPage();

      const bcCard = (await screen.findByText('BC카드')).closest('li')!;
      const deleteButton = within(bcCard).getByRole('button', {
        name: '카드 삭제',
      });
      deleteButton.click();

      await waitFor(() => {
        expect(window.confirm).toHaveBeenCalled();
      });
      expect(deleteSpy).not.toHaveBeenCalled();
      expect(screen.getByText('BC카드')).toBeTruthy();
    });

    it('confirm을 수락하면 DELETE를 보내고 목록에서 제거된다', async () => {
      vi.spyOn(window, 'confirm').mockReturnValue(true);
      server.use(
        http.delete('/cards/:id', () => new HttpResponse(null, { status: 204 })),
      );

      renderPage();

      const bcCard = (await screen.findByText('BC카드')).closest('li')!;
      const deleteButton = within(bcCard).getByRole('button', {
        name: '카드 삭제',
      });
      deleteButton.click();

      await waitFor(() => {
        expect(screen.queryByText('BC카드')).toBeNull();
      });
      expect(screen.getByText('신한카드')).toBeTruthy();
    });
  });
});

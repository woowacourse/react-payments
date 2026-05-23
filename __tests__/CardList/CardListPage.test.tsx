import '@testing-library/jest-dom/vitest';

import { delay, http, HttpResponse } from 'msw';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Card } from '../../src/domain/card/types/card';
import CardListPage from '../../src/feature/CardList/CardListPage';
import { server } from '../../src/mocks/server';

const mockCards: Card[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
];

const renderCardListPage = () => {
  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );
};

describe('CardListPage', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('카드 목록을 조회하는 경우, 요청하는 동안 스켈레톤 UI를 보여준다.', async () => {
    server.use(
      http.get('/cards', async () => {
        await delay('infinite');
      }),
    );

    renderCardListPage();

    expect(
      await screen.findByRole('status', {
        name: '카드 목록을 불러오는 중',
      }),
    ).toBeInTheDocument();
  });

  it('카드 목록 조회 성공 시, 카드 목록이 존재하면 등록된 카드 목록을 표시한다.', async () => {
    server.use(http.get('/cards', () => HttpResponse.json(mockCards)));

    renderCardListPage();

    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('5511 12** **** 9012')).toBeInTheDocument();
    expect(screen.getByText('유효기간 12/28')).toBeInTheDocument();
  });

  it('카드 목록 조회 성공 시, 카드 목록이 비어 있으면 빈 상태 UI와 카드 등록 버튼을 표시한다.', async () => {
    server.use(http.get('/cards', () => HttpResponse.json([])));

    renderCardListPage();

    expect(
      await screen.findByText('등록된 카드가 없습니다'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '카드 추가하기' }),
    ).toBeInTheDocument();
  });

  it('카드 목록 조회 실패 시 에러 UI와 다시 시도 버튼을 표시한다.', async () => {
    server.use(
      http.get('/cards', () =>
        HttpResponse.json(
          { message: '카드 목록을 불러오지 못했습니다.' },
          { status: 500 },
        ),
      ),
    );

    renderCardListPage();

    expect(
      await screen.findByText('카드 목록을 불러올 수 없어요'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '다시 시도' }),
    ).toBeInTheDocument();
  });

  it('카드 삭제 요청이 성공하면 카드가 목록에서 사라진다.', async () => {
    const user = userEvent.setup();
    const cards = [...mockCards];

    server.use(
      http.get('/cards', () => HttpResponse.json(cards)),
      http.delete('/cards/:id', ({ params }) => {
        const cardId = String(params.id);
        const targetIndex = cards.findIndex((card) => card.id === cardId);

        if (targetIndex !== -1) cards.splice(targetIndex, 1);

        return new HttpResponse(null, { status: 204 });
      }),
    );
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    renderCardListPage();

    expect(await screen.findByText('BC카드')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '카드 삭제' }));

    expect(window.confirm).toHaveBeenCalledWith('카드를 삭제하시겠습니까?');

    await waitFor(() => {
      expect(screen.queryByText('BC카드')).not.toBeInTheDocument();
    });
    expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });
});

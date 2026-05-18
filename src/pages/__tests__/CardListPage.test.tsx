import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { server } from '../../mocks/server';
import CardListPage from '../CardListPage';
import { MemoryRouter, Route, Routes } from 'react-router';
import { getCardsScenarios } from '../../mocks/scenarios/cards';
import { ROUTES } from '../../constants';
import type { SCardList } from '../../mocks/datas/cards.type';

const mockCards: SCardList = [
  {
    id: '1',
    issuerCode: '31', // 국민
    number: '123456******5678',
    expirationDate: '12/24',
  },
];

describe('카드 목록 페이지 통합 테스트', () => {
  it('1. 카드가 없는 경우, 로딩 스켈레톤이 보였다가 "등록된 카드가 없습니다" 문구가 노출된다.', async () => {
    // given
    server.use(getCardsScenarios.empty);

    // when
    render(
      <MemoryRouter>
        <CardListPage />
      </MemoryRouter>,
    );

    // then
    expect(document.getElementsByClassName('skeleton').length).toBeGreaterThan(0);

    // then
    await waitFor(() => {
      expect(document.getElementsByClassName('skeleton').length).toBe(0);
    });

    expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });

  it('2. 카드가 있는 경우, 로딩 스켈레톤이 보였다가 카드 목록이 노출된다.', async () => {
    // given
    server.use(getCardsScenarios.success(mockCards));

    // when
    render(
      <MemoryRouter>
        <CardListPage />
      </MemoryRouter>,
    );

    // then
    expect(document.getElementsByClassName('skeleton').length).toBeGreaterThan(0);

    // then
    await waitFor(() => {
      expect(document.getElementsByClassName('skeleton').length).toBe(0);
    });

    expect(screen.getByText(/1234/)).toBeInTheDocument();
    expect(screen.getByText('보유 카드 (1)')).toBeInTheDocument();
  });

  it('3. 서버 에러 발생 시, 로딩 스켈레톤이 보였다가 에러 메시지가 노출된다.', async () => {
    // given
    server.use(getCardsScenarios.error);

    // when
    render(
      <MemoryRouter>
        <CardListPage />
      </MemoryRouter>,
    );

    // then
    expect(document.getElementsByClassName('skeleton').length).toBeGreaterThan(0);

    // then
    await waitFor(() => {
      expect(document.getElementsByClassName('skeleton').length).toBe(0);
    });

    expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
  });

  it('4. 비어 있는 카드 목록에서 카드 추가 버튼 클릭 시 카드 추가 페이지로 이동한다.', async () => {
    // given
    server.use(getCardsScenarios.empty);

    // when
    render(
      <MemoryRouter initialEntries={[ROUTES.CARD_LIST]}>
        <Routes>
          <Route path={ROUTES.CARD_LIST} element={<CardListPage />} />
          <Route path={ROUTES.ADD_CARD} element={<div>Add Card Page Content</div>} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '카드 추가하기' })).toBeInTheDocument();
    });

    screen.getByRole('button', { name: '카드 추가하기' }).click();

    // then
    await waitFor(() => {
      expect(screen.getByText('Add Card Page Content')).toBeInTheDocument();
    });
  });

  it('5. 카드가 있는 목록에서 카드 추가 버튼 클릭 시 카드 추가 페이지로 이동한다.', async () => {
    // given
    server.use(getCardsScenarios.success(mockCards));

    // when
    render(
      <MemoryRouter initialEntries={[ROUTES.CARD_LIST]}>
        <Routes>
          <Route path={ROUTES.CARD_LIST} element={<CardListPage />} />
          <Route path={ROUTES.ADD_CARD} element={<div>Add Card Page Content</div>} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '+ 카드 추가' })).toBeInTheDocument();
    });

    screen.getByRole('button', { name: '+ 카드 추가' }).click();

    // then
    await waitFor(() => {
      expect(screen.getByText('Add Card Page Content')).toBeInTheDocument();
    });
  });
});

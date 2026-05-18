import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import CardsPage from '../pages/CardsPage';
import type { CardsResponse } from '../types/api';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderCardsPage = () =>
  render(
    <MemoryRouter initialEntries={['/cards']}>
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/" element={<div>카드 등록</div>} />
      </Routes>
    </MemoryRouter>,
  );

test('/cards 접속 시 로딩 중에는 스켈레톤이 표시된다', async () => {
  server.use(http.get('/cards', () => HttpResponse.json([], { status: 200 })));

  renderCardsPage();

  expect(screen.getByText('카드 목록 로딩 중')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText('카드 목록 로딩 중')).not.toBeInTheDocument();
  });
});

test('GET /cards 요청이 실패하면 "카드 목록을 불러올 수 없어요"가 표시된다', async () => {
  server.use(http.get('/cards', () => HttpResponse.json(null, { status: 500 })));

  renderCardsPage();

  await waitFor(() => {
    expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
  });
});

test('GET /cards 응답이 빈 배열이면 "등록된 카드가 없습니다"가 표시된다', async () => {
  server.use(http.get('/cards', () => HttpResponse.json([], { status: 200 })));

  renderCardsPage();

  await waitFor(() => {
    expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });
});

test('GET /cards 응답에 카드가 있으면 카드 목록이 표시된다', async () => {
  const mockCards: CardsResponse = [
    { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/26' },
    { id: '2', issuerCode: '41', number: '451112******1290', expirationDate: '06/25' },
  ];

  server.use(http.get('/cards', () => HttpResponse.json(mockCards, { status: 200 })));

  renderCardsPage();

  await waitFor(() => {
    expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument();
  });
});

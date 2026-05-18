import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { http, HttpResponse } from 'msw';
import { Suspense } from 'react';
import { server } from '../setup';
import CardListPage from '../../pages/CardListPage';
import { API_ENDPOINTS } from '../../api/cards';

const renderCardListPage = async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <CardListPage />
        </Suspense>
      </MemoryRouter>,
    );
  });
};

describe('CardListPage', () => {
  it('카드 목록이 있으면 카드가 렌더됩니다', async () => {
    server.use(
      http.get(API_ENDPOINTS.cards, () =>
        HttpResponse.json([{ id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' }]),
      ),
    );

    await renderCardListPage();

    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('5511 **** **** 9012')).toBeInTheDocument();
  });

  it('카드 목록이 비어있으면 EmptyList가 렌더됩니다', async () => {
    server.use(http.get(API_ENDPOINTS.cards, () => HttpResponse.json([])));

    await renderCardListPage();

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  });

  it('API 에러 시 ErrorList가 렌더됩니다', async () => {
    server.use(http.get(API_ENDPOINTS.cards, () => HttpResponse.error()));

    await renderCardListPage();

    expect(await screen.findByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
  });

  it('삭제 버튼 클릭 후 confirm 시 카드가 목록에서 사라집니다', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    server.use(
      http.get(API_ENDPOINTS.cards, () =>
        HttpResponse.json([{ id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' }]),
      ),
      http.delete(API_ENDPOINTS.card('1'), () => new HttpResponse(null, { status: 204 })),
    );

    await renderCardListPage();

    const deleteButton = await screen.findByRole('button', { name: '✕' });
    await userEvent.click(deleteButton);

    expect(screen.queryByText('BC카드')).not.toBeInTheDocument();
  });
});

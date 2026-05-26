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

  it('삭제 API 실패 시 낙관적 업데이트가 롤백되고 alert가 표시됩니다', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    server.use(
      http.get(API_ENDPOINTS.cards, () =>
        HttpResponse.json([{ id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' }]),
      ),
      http.delete(API_ENDPOINTS.card('1'), () =>
        HttpResponse.json({ code: 'NOT_FOUND', message: '카드를 찾을 수 없습니다.' }, { status: 404 }),
      ),
    );

    await renderCardListPage();

    const deleteButton = await screen.findByRole('button', { name: '✕' });
    await userEvent.click(deleteButton);

    expect(alertMock).toHaveBeenCalledWith('카드 삭제에 실패했습니다. 다시 시도해주세요.');
    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('동시 삭제가 모두 실패하면 각 카드가 독립적으로 롤백됩니다', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    let resolveDelete1: () => void;
    let resolveDelete2: () => void;
    const delete1Promise = new Promise<void>((resolve) => {
      resolveDelete1 = resolve;
    });
    const delete2Promise = new Promise<void>((resolve) => {
      resolveDelete2 = resolve;
    });

    server.use(
      http.get(API_ENDPOINTS.cards, () =>
        HttpResponse.json([
          { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' },
          { id: '2', issuerCode: '41', number: '411111******1111', expirationDate: '06/30' },
        ]),
      ),
      http.delete(API_ENDPOINTS.card('1'), async () => {
        await delete1Promise;
        return HttpResponse.json({ code: 'NOT_FOUND', message: '카드를 찾을 수 없습니다.' }, { status: 404 });
      }),
      http.delete(API_ENDPOINTS.card('2'), async () => {
        await delete2Promise;
        return HttpResponse.json({ code: 'NOT_FOUND', message: '카드를 찾을 수 없습니다.' }, { status: 404 });
      }),
    );

    await renderCardListPage();

    const card1 = await screen.findByText('BC카드');
    const card2 = await screen.findByText('신한카드');
    const deleteButton1 = card1.closest('li')!.querySelector('button')!;
    const deleteButton2 = card2.closest('li')!.querySelector('button')!;

    await userEvent.click(deleteButton1);
    await userEvent.click(deleteButton2);

    // 둘 다 낙관적으로 사라진 상태
    expect(screen.queryByText('BC카드')).not.toBeInTheDocument();
    expect(screen.queryByText('신한카드')).not.toBeInTheDocument();

    // 카드 1 롤백
    resolveDelete1!();
    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.queryByText('신한카드')).not.toBeInTheDocument();

    // 카드 2 롤백
    resolveDelete2!();
    expect(await screen.findByText('신한카드')).toBeInTheDocument();
    expect(screen.getByText('BC카드')).toBeInTheDocument();
  });

  it('동시 삭제 중 하나가 실패하면 성공한 카드는 유지되고 실패한 카드만 롤백됩니다', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    let resolveDelete1: () => void;
    const delete1Promise = new Promise<void>((resolve) => {
      resolveDelete1 = resolve;
    });

    server.use(
      http.get(API_ENDPOINTS.cards, () =>
        HttpResponse.json([
          { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' },
          { id: '2', issuerCode: '41', number: '411111******1111', expirationDate: '06/30' },
        ]),
      ),
      http.delete(API_ENDPOINTS.card('1'), async () => {
        await delete1Promise;
        return HttpResponse.json({ code: 'NOT_FOUND', message: '카드를 찾을 수 없습니다.' }, { status: 404 });
      }),
      http.delete(API_ENDPOINTS.card('2'), () => new HttpResponse(null, { status: 204 })),
    );

    await renderCardListPage();

    const card1 = await screen.findByText('BC카드');
    const card2 = await screen.findByText('신한카드');
    const deleteButton1 = card1.closest('li')!.querySelector('button')!;
    const deleteButton2 = card2.closest('li')!.querySelector('button')!;

    await userEvent.click(deleteButton1); // 카드 1 삭제 (느리고 실패)
    await userEvent.click(deleteButton2); // 카드 2 삭제 (즉시 성공)

    // 카드 2 삭제 완료 후
    expect(screen.queryByText('신한카드')).not.toBeInTheDocument();

    // 카드 1 롤백
    resolveDelete1!();
    await screen.findByText('BC카드');

    // 카드 2는 복원되지 않아야 함
    expect(screen.queryByText('신한카드')).not.toBeInTheDocument();
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

import { server } from '../../mocks/server';
import { delay, http, HttpResponse } from 'msw';
import { screen } from '@testing-library/react';
import CardListPage from './CardListPage';
import { expect, test, vi } from 'vitest';
import { renderWithRouter } from '../../test/render';
import userEvent from '@testing-library/user-event';
import { cards } from '../../mocks/mockDB';
const BASE_URL = 'https://api.example.com';

test('카드 목록을 불러오는 동안 스켈레톤 UI를 보여준다.', () => {
  server.use(
    http.get(`${BASE_URL}/cards`, async () => {
      // msw를 이용해 응답을 늦춘다.
      await delay('infinite');

      return HttpResponse.json({});
    }),
  );

  renderWithRouter(<CardListPage />);

  expect(screen.getByTestId('card-list-loading')).toBeInTheDocument();
});

test('카드가 없으면 빈 목록 안내와 카드 추가 버튼을 보여준다.', async () => {
  server.use(
    http.get(`${BASE_URL}/cards`, async () => {
      return HttpResponse.json([], { status: 200 });
    }),
  );

  renderWithRouter(<CardListPage />);

  expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: '카드 추가하기' }),
  ).toBeInTheDocument();
});

test('카드가 있으면 카드 목록을 보여준다.', async () => {
  server.use(
    http.get(`${BASE_URL}/cards`, async () => {
      return HttpResponse.json(
        [
          {
            id: '550e8400-e29b-41d4-a716-446655440000',
            issuerCode: '31',
            number: '551112******9012',
            expirationDate: '12/28',
          },
          {
            id: '550e8400-e29b-41d4-a716-446655440001',
            issuerCode: '31',
            number: '534212******8127',
            expirationDate: '02/30',
          },
        ],
        { status: 200 },
      );
    }),
  );

  renderWithRouter(<CardListPage />);

  // 추가한 카드 번호가 있는지
  expect(await screen.findByText(/5511/)).toBeInTheDocument();

  // 추가한 카드의 개수와 일치하는지
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('카드 목록 조회에 실패하면 오류 안내와 다시 시도 버튼을 보여준다.', async () => {
  server.use(
    http.get(`${BASE_URL}/cards`, async () => {
      return HttpResponse.json(null, { status: 400 });
    }),
  );

  renderWithRouter(<CardListPage />);

  expect(
    await screen.findByText('카드 목록을 불러올 수 없어요'),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
});

test('삭제 버튼을 누르면 카드 목록에서 해당 카드가 사라진다.', async () => {
  cards.push({
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  });

  renderWithRouter(<CardListPage />);
  // window.confirm 요청 시 true 값으로 모킹
  vi.spyOn(window, 'confirm').mockReturnValue(true);

  const user = userEvent.setup();
  // 삭제 버튼 클릭
  await user.click(await screen.findByRole('button', { name: 'delete-icon' }));

  expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: '카드 추가하기' }),
  ).toBeInTheDocument();
});

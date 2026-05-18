import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { http, HttpResponse } from 'msw';

import { renderProvider } from '../../../utils/render';

import { server } from '../../../../src/mocks/msw/server';
import { cards } from '../../../../src/mocks/data/cards';

import { AppRoutes } from '../../../../src/routes';

describe('카드 목록 페이지 테스트', async () => {
  test('등록된 카드가 없는 경우 화면에 등록된 카드가 없다는 안내 메시가 보인다', async () => {
    // ARRANGE
    server.use(
      http.get('/cards', () => {
        return HttpResponse.json([]);
      }),
    );

    renderProvider(<AppRoutes />, { route: '/payments/cards' });

    // ASSERT
    expect(await screen.findByText(/등록된 카드가 없습니다/)).toBeInTheDocument();
  });

  test('카드 등록후 카드 리스트에 등록한 카드가 보인다', async () => {
    // ARRANGE
    renderProvider(<AppRoutes />, { route: '/payments/cards' });

    // ASSERT
    expect(await screen.findByText(/5511 \*\*\*\* \*\*\*\* 9012/)).toBeInTheDocument();
    expect(await screen.findByText(/BC카드/)).toBeInTheDocument();
    expect(await screen.findByText(/12\/28/)).toBeInTheDocument();
  });

  test('카드 추가 버튼 클릭시 등록 페이지로 이동한다', async () => {
    // ARRANGE
    renderProvider(<AppRoutes />, { route: '/payments/cards' });

    // ACT
    userEvent.click(await screen.findByRole('button', { name: '+ 카드 추가' }));

    // ASSERT
    expect(await screen.findByText(/결제할 카드 번호를 입력해 주세요/)).toBeInTheDocument();
  });

  test('카드 목룍 요청 실패시 실패 메시지와 다시 시도 버튼이 보인다', async () => {
    // ARRANGE
    server.use(
      http.get('/cards', () => {
        return HttpResponse.error();
      }),
    );

    renderProvider(<AppRoutes />, { route: '/payments/cards' });

    // ASSERT
    expect(await screen.findByText(/카드 목록을 불러올 수 없어요/)).toBeInTheDocument();
  });

  test('카드 삭제 시 카드 목록에서 삭제했던 카드가 삭제된다 ', async () => {
    // ARRANGE
    renderProvider(<AppRoutes />, { route: '/payments/cards' });

    // ACT
    const items = await screen.findAllByRole('button');
    const firstItem = items[0];

    await userEvent.click(firstItem);

    server.use(
      http.get('/cards', () => {
        return HttpResponse.json(cards.slice(1));
      }),
    );

    // ASSERT
    await waitFor(() => {
      expect(screen.getByText(cards[0].expirationDate)).not.toBeInTheDocument();
    });
  });
});
